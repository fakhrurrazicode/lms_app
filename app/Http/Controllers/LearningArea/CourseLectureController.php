<?php

namespace App\Http\Controllers\LearningArea;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Evaluation;
use App\Models\CourseTrack;
use Illuminate\Http\Request;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CourseLectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course = $course->load([
            'course_category',
            'course_sections.course_lectures.attachments',
            'course_sections.course_lectures.course_track',
            'course_sections.evaluation',
            'course_sections.course_tracks',
        ]);

        $course_lecture->load(['attachments', 'course_track']);

        $prev_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $course_section->id],
            ['order_column', '<', $course_lecture->order_column],
        ])->orderBy('course_section_id')
            ->orderBy('order_column', 'desc')
            ->first();


        $next_course_lecture = CourseLecture::where([
            ['course_id', '=', $course->id],
            ['course_section_id', '=', $course_section->id],
            ['order_column', '>', $course_lecture->order_column],
        ])->orderBy('course_section_id')
            ->orderBy('order_column', 'asc')
            ->first(); // jika tidak menemukan next lecture lagi arti nya course telah selesai



        return Inertia::render('LearningArea/CourseLecture/Show', compact(
            'course',
            'course_section',
            'course_lecture',
            'prev_course_lecture',
            'next_course_lecture',
        ));
    }

    public function prev(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        // Simpan course track jika belum ada
        CourseTrack::firstOrCreate([
            'user_id' => Auth::id(),
            'course_id' => $course->id,
            'course_section_id' => $course_section->id,
            'course_lecture_id' => $course_lecture->id,
        ]);

        // Cari lecture sebelumnya dalam section yang sama
        $prev_course_lecture = CourseLecture::where('course_id', $course->id)
            ->where('course_section_id', $course_section->id)
            ->where('order_column', '<', $course_lecture->order_column)
            ->orderBy('course_section_id', 'desc')
            ->orderBy('order_column', 'desc')
            ->first();

        if ($prev_course_lecture) {
            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $prev_course_lecture->course_id,
                'course_section' => $prev_course_lecture->course_section_id,
                'course_lecture' => $prev_course_lecture->id,
            ]);
        }

        // Jika tidak ada lecture sebelumnya di section ini, cari section sebelumnya
        $prev_course_section = CourseSection::where('course_id', $course->id)
            ->where('order_column', '<', $course_section->order_column)
            ->has('course_lectures')
            ->orderBy('course_id', 'desc')
            ->orderBy('order_column', 'desc')
            ->first();

        if ($prev_course_section) {
            $prev_course_lecture = $prev_course_section->course_lectures()
                ->orderBy('order_column', 'desc')
                ->first();

            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $prev_course_lecture->course_id,
                'course_section' => $prev_course_lecture->course_section_id,
                'course_lecture' => $prev_course_lecture->id,
            ]);
        }

        // Jika tidak ada sebelumnya, arahkan kembali ke halaman awal course
        return to_route('learning_area.course.show', [
            'course' => $course->id,
        ]);
    }


    public function next(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        // Simpan course track jika belum ada
        CourseTrack::firstOrCreate([
            'user_id' => Auth::id(),
            'course_id' => $course->id,
            'course_section_id' => $course_section->id,
            'course_lecture_id' => $course_lecture->id,
        ]);

        // Cari lecture berikutnya dalam section yang sama
        $next_course_lecture = CourseLecture::where('course_id', $course->id)
            ->where('course_section_id', $course_section->id)
            ->where('order_column', '>', $course_lecture->order_column)
            ->orderBy('course_section_id')
            ->orderBy('order_column')
            ->first();

        if ($next_course_lecture) {
            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        }

        // Cek apakah section memiliki evaluasi
        $evaluation = Evaluation::where('course_section_id', $course_section->id)->first();
        if ($evaluation) {
            return to_route('learning_area.course.course_section.evaluation.index', [
                'course' => $course->id,
                'course_section' => $course_section->id,
            ]);
        }

        // Cari section berikutnya
        $next_course_section = CourseSection::where('course_id', $course->id)
            ->where('order_column', '>', $course_section->order_column)
            ->has('course_lectures')
            ->orderBy('course_id')
            ->orderBy('order_column')
            ->first();

        if ($next_course_section) {
            $next_course_lecture = $next_course_section->course_lectures()
                ->orderBy('order_column')
                ->first();

            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        }

        // Jika tidak ada lecture dan section berikutnya
        return to_route('learning_area.course.show', [
            'course' => $course->id,
        ]);
    }




    public function finish(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        // Simpan course track jika belum ada
        CourseTrack::firstOrCreate([
            'user_id' => Auth::id(),
            'course_id' => $course->id,
            'course_section_id' => $course_section->id,
            'course_lecture_id' => $course_lecture->id,
        ]);

        // Cari lecture berikutnya dalam section yang sama
        $next_course_lecture = CourseLecture::where('course_id', $course->id)
            ->where('course_section_id', $course_section->id)
            ->where('order_column', '>', $course_lecture->order_column)
            ->orderBy('course_section_id')
            ->orderBy('order_column')
            ->first();

        if ($next_course_lecture) {
            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        }

        // Cek apakah section memiliki evaluasi
        $evaluation = Evaluation::where('course_section_id', $course_section->id)->first();
        if ($evaluation) {
            return to_route('learning_area.course.course_section.evaluation.index', [
                'course' => $course->id,
                'course_section' => $course_section->id,
            ]);
        }

        // Cari section berikutnya
        $next_course_section = CourseSection::where('course_id', $course->id)
            ->where('order_column', '>', $course_section->order_column)
            ->has('course_lectures')
            ->orderBy('course_id')
            ->orderBy('order_column')
            ->first();

        if ($next_course_section) {
            $next_course_lecture = $next_course_section->course_lectures()
                ->orderBy('order_column')
                ->first();

            return to_route('learning_area.course.course_section.course_lecture.show', [
                'course' => $next_course_lecture->course_id,
                'course_section' => $next_course_lecture->course_section_id,
                'course_lecture' => $next_course_lecture->id,
            ]);
        }

        // Jika tidak ada lecture dan section berikutnya
        return to_route('learning_area.course.show', [
            'course' => $course->id,
        ]);
    }


    public function finish_and_evaluate(Course $course, CourseSection $course_section, CourseLecture $course_lecture)
    {
        $course_track = CourseTrack::where([
            'user_id' => Auth::user()->id,
            'course_id' => $course->id,
            'course_section_id' => $course_section->id,
            'course_lecture_id' => $course_lecture->id,
        ])->first();

        if (!$course_track) {
            CourseTrack::create([
                'user_id' => Auth::user()->id,
                'course_id' => $course->id,
                'course_section_id' => $course_section->id,
                'course_lecture_id' => $course_lecture->id,
            ]);
        }

        // $next_course_lecture = CourseLecture::where('id', '>', $course_lecture->id)
        //     ->where('course_id', $course_section->course_id)
        //     ->orderBy('id', 'asc')
        //     ->first(); // jika tidak menemukan next lecture lagi arti nya course telah selesai


        if ($course_section->evaluation) {
            return to_route('learning_area.course.course_section.evaluation.index', [
                'course' => $course->id,
                'course_section' => $course_section->id,
            ]);
        } else {
            return to_route('learning_area.course.show', [
                'course' => $course->id,
            ]);
        }
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseLecture $course_lecture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseLecture $course_lecture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseLecture $course_lecture)
    {
        //
    }
}
