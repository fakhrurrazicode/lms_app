<?php

namespace App\Models;

use App\Models\Tag;
use App\Models\User;
use App\Models\CourseReview;
use App\Models\CourseSection;
use App\Models\CourseCategory;
use Binafy\LaravelCart\Cartable;
use App\Models\CourseSubCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends BaseModel implements Cartable
{

    use HasFactory;

    protected $guarded = [];
    protected $appends = ['image_url', 'average_stars', 'is_on_wishlist'];

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getImageUrlAttribute()
    {
        return $this->image ? url('/storage/' . $this->image) : asset('assets/images/no-image.jpeg');
    }

    public function getAverageStarsAttribute()
    {
        $stars = CourseReview::where('course_id', $this->id)->avg('stars');

        if ($stars == null) {
            return 0;
        }

        return round($stars, 0);
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

    public function course_sections()
    {
        return $this->hasMany(CourseSection::class);
    }

    public function course_lectures()
    {
        return $this->hasMany(CourseLecture::class);
    }

    public function isUserAuthenticated()
    {
        return Auth::check();
    }

    public function getIsOnWishlistAttribute()
    {
        if ($this->isUserAuthenticated()) {


            $wishlist = Wishlist::where([
                'wishlistable_type' => self::class,
                'wishlistable_id' => $this->id,
                'user_id' => Auth::user()->id,
            ])->first();

            return $wishlist ? true : false;
        } else {
            return false;
        }
    }
}
