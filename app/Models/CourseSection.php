<?php

namespace App\Models;

use App\Models\Evaluation;
use App\Models\CourseLecture;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class CourseSection extends BaseModel
{


    // public static function boot()
    // {
    //     parent::boot();

    //     CourseLecture::deleting(function ($course_lecture) {
    //         $course_lecture->attachments()->delete();
    //         $file = public_path('storage/' . $course_lecture->video);
    //         // dd(File::exists($file));
    //         if (File::isFile($file)) {
    //             File::delete($file);
    //         }
    //     });
    // }

    protected $guarded = [];

    public $appends = ['has_evaluation'];
    // protected $with = ['course_lectures'];

    public function getHasEvaluationAttribute()
    {
        return $this->evaluation ? true : false;
    }

    // public function getEvaluatableAttribute()
    // {
    //     return $this->course_lectures->count() == $this->course_tracks
    // }

    public function course_tracks()
    {
        if (Auth::check()) {
            return $this->hasMany(CourseTrack::class)->where('user_id', Auth::id());
        } else {
            return [];
        }
    }

    public function course_lectures()
    {
        return $this->hasMany(CourseLecture::class, 'course_section_id', 'id');
    }

    public function evaluation()
    {
        return $this->hasOne(Evaluation::class);
    }
}
