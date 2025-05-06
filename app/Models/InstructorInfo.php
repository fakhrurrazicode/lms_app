<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstructorInfo extends Model
{
    protected $guarded = [];

    protected $appends = [
        'id_card_url',
        'avg_reviews',
    ];

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getIdCardUrlAttribute()
    {
        return $this->id_card ? url('/storage/' . $this->id_card) : asset('images/dummy/no-image.jpeg');
    }

    public function getAvgReviewsAttribute()
    {
        $course_ids = Course::where('instructor_id', $this->user_id)->pluck('id');

        return round(CourseReview::whereIn('id', $course_ids)->avg('stars'), 2);
    }
}
