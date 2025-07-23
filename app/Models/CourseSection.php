<?php

namespace App\Models;


use App\Models\Evaluation;
use App\Models\CourseLecture;
use App\Scopes\OrderColumnScope;
use Illuminate\Support\Facades\Auth;
use Spatie\EloquentSortable\Sortable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Spatie\EloquentSortable\SortableTrait;

class CourseSection extends BaseModel implements Sortable
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
        return static::query()->where('course_id', $this->course_id);
    }

    protected static function booted()
    {
        static::addGlobalScope(new OrderColumnScope);
    }

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

    // public function forumThreads()
    // {
    //     return $this->morphMany(ForumThread::class, 'threadable');
    // }

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

    public function move_order_up(Course $course, CourseSection $course_section)
    {
        $course_section->moveOrderUp();
    }

    public function move_order_down(Course $course, CourseSection $course_section)
    {

        $course_section->moveOrderDown();
    }
}
