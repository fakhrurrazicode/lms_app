<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseCategoryStoreRequest;
use App\Http\Requests\CourseCategoryUpdateRequest;
use App\Http\Requests\PaginateRequest;
use App\Models\CourseCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $courseCategories = CourseCategory::orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        return Inertia::render('Backend/CourseCategory/Index', [
            'courseCategories' => $courseCategories,
            'request' => $request,
        ]);
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
    public function store(CourseCategoryStoreRequest $request)
    {
        CourseCategory::create($request->validated());
        return to_route('backend.course_category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseCategoryUpdateRequest $request, CourseCategory $course_category)
    {
        $course_category->update($request->validated());
        return to_route('backend.course_category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseCategory $course_category)
    {
        $course_category->delete();
        return to_route('backend.course_category.index');
    }
}
