<?php

namespace App\Models;

use App\Models\Tag;
use App\Models\User;
use App\Models\Wishlist;
use App\Models\Enrollment;
use App\Models\CourseReview;
use App\Models\CourseSection;
use App\Models\CourseCategory;
use Binafy\LaravelCart\Cartable;
use App\Models\CourseSubCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends BaseModel implements Cartable
{

    use HasFactory;

    protected $guarded = [];
    protected $appends = [
        'image_url',
        'average_stars',
        'is_on_wishlist',
        'enrolled',
        'discounted_price',
        'course_section_count',
        'course_lecture_count',
        'feature_course_lecture',
        'enrollment_count',
        'progress_percentage',
        'course_review_recap',
        'total_lecture_duration'
    ];
    protected $with = ['instructor', 'course_category'];

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getDiscountedPriceAttribute()
    {
        return $this->discount_percentage ? $this->price - ($this->price * ($this->discount_percentage / 100)) : $this->price;
    }

    public function getImageUrlAttribute()
    {
        return $this->image ? url('/storage/' . $this->image) : asset('images/dummy/no-image.jpeg');
    }

    public function getAverageStarsAttribute()
    {
        $stars = CourseReview::where('course_id', $this->id)->avg('stars');

        if ($stars == null) {
            return 0;
        }

        return round($stars, 0);
    }

    public function getCourseSectionCountAttribute()
    {
        return $this->course_sections()->count();
    }

    public function getCourseLectureCountAttribute()
    {
        return $this->course_lectures()->count();
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id', 'id');
    }

    public function course_category()
    {
        return $this->belongsTo(CourseCategory::class);
    }

    public function course_sub_category()
    {
        return $this->belongsTo(CourseSubCategory::class);
    }

    public function course_reviews()
    {
        return $this->hasMany(CourseReview::class);
    }

    public function getCourseReviewRecapAttribute()
    {
        $avg = CourseReview::where('course_id', $this->id)->avg('stars');
        $total = CourseReview::where('course_id', $this->id)->count();

        $star_counts = DB::table('course_reviews')
            ->where('course_id', $this->id)
            ->select('stars', DB::raw('COUNT(*) as count'))
            ->groupBy('stars')
            ->pluck('count', 'stars');

        return [
            'avg' => number_format($avg, 1),
            'total' => $total,
            'star_counts' => $star_counts,
        ];
    }

    public function course_sections()
    {
        return $this->hasMany(CourseSection::class);
    }

    public function course_lectures()
    {
        return $this->hasMany(CourseLecture::class);
    }

    public function getTotalLectureDurationAttribute()
    {
        return gmdate('H:i:s', CourseLecture::where('course_id', $this->id)->sum('video_duration'));
    }


    public function course_tracks()
    {
        return Auth::check() ? $this->hasMany(CourseTrack::class)->where([
            'user_id' => Auth::user()->id,
        ]) : [];
    }

    public function getCourseTrackCountAttribute()
    {
        return Auth::check() ? $this->course_tracks()->count() : 0;
    }

    public function getProgressPercentageAttribute()
    {
        $course_lecture_count = $this->course_lecture_count;
        $course_track_count = $this->course_track_count;

        if (!$course_lecture_count) {
            return 0;
        }

        if (!$course_track_count) {
            return 0;
        }

        $percentage = ($course_track_count / $course_lecture_count) * 100;
        $percentage = number_format($percentage, 2);
        return $percentage;
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function getEnrollmentCountAttribute()
    {
        return $this->enrollments()->count();
    }

    public function isUserAuthenticated()
    {
        return Auth::check();
    }

    public function getIsOnWishlistAttribute()
    {
        // dd($this->isUserAuthenticated());
        if ($this->isUserAuthenticated()) {

            // dd(Auth::user()->id);
            // dd($this->id);
            $wishlist = Wishlist::where('user_id', Auth::user()->id)
                ->where('wishlistable_id', $this->id)
                ->where('wishlistable_type', 'App\Models\Course')
                ->first();

            // dd($wishlist);

            return $wishlist ? true : false;
        } else {
            return false;
        }
    }

    public function getEnrolledAttribute()
    {
        if ($this->isUserAuthenticated()) {
            $enrolled = Enrollment::where('user_id', Auth::user()->id)
                ->where('course_id', $this->id)
                ->first();

            return $enrolled ? true : false;
        } else {
            return false;
        }
    }
    public function getFeatureCourseLectureAttribute()
    {
        $course_lecture = CourseLecture::where([
            'course_id' => $this->id,
            'set_as_featured' => true,
        ])->first();
        return $course_lecture;
    }

    public function course_review()
    {
        return $this->hasOne(CourseReview::class);
    }
}
