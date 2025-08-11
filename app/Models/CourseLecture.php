<?php

namespace App\Models;

use App\Models\Thread;
use App\Scopes\OrderColumnScope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Spatie\EloquentSortable\Sortable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Spatie\EloquentSortable\SortableTrait;

class CourseLecture extends BaseModel implements Sortable
{

    use SortableTrait;

    /**
     * The sortable configuration.
     *
     * @var array<string, mixed>
     */
    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
        'sort_on_has_many' => true,
    ];

    /**
     * The query used for the sortorder package.
     */
    public function buildSortQuery(): Builder
    {
        return static::query()->where('course_section_id', $this->course_section_id);
    }

    protected static function booted()
    {
        static::addGlobalScope(new OrderColumnScope);
    }

    public static function boot()
    {
        parent::boot();

        CourseLecture::deleting(function ($course_lecture) {
            $course_lecture->attachments()->delete();
            $file = public_path('storage/' . $course_lecture->video);
            // dd(File::exists($file));
            if (File::isFile($file)) {
                File::delete($file);
            }
        });
    }



    protected $guarded = [];
    protected $appends = [
        'video_url',
        'video_duration_human_readable',
        'done'
    ];

    // protected $with = ['course_track'];



    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    public function course_section()
    {
        return $this->belongsTo(CourseSection::class);
    }

    public function getVideoUrlAttribute()
    {
        if ($this->video) {
            return url('/storage/' . $this->video);
        }

        if ($this->youtube_video_id) {
            return 'https://www.youtube.com/embed/' . $this->youtube_video_id;
        }

        return null;
        // return $this->video ?: asset('videos/dummy/sample_video.mp4');
        // return $this->youtube_video_id ? 'https://www.youtube.com/' . $this->youtube_video_id :  asset('videos/dummy/sample_video.mp4');
    }

    public function getVideoDurationHumanReadableAttribute()
    {
        return gmdate('H:i:s', $this->video_duration);
    }

    public function course_track()
    {
        if (!Auth::check()) {
            return null;
        }

        return $this->belongsTo(CourseTrack::class, 'id', 'course_lecture_id')
            ->where('user_id', Auth::user()->id);
    }

    public function getDoneAttribute()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $course_track = CourseTrack::where([
                ['user_id', '=', $user->id],
                ['course_lecture_id', '=', $this->id]
            ])->first();

            return $course_track ? true : false;
        } else {
            return false;
        }
    }

    // public function getPrevCourseLectureAttribute()
    // {
    //     return self::where('id', '<', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }

    // public function getNextCourseLectureAttribute()
    // {
    //     return self::where('id', '>', $this->id)->where('course_id', $this->course_id)->orderBy('id', 'desc')->first();
    // }
}
