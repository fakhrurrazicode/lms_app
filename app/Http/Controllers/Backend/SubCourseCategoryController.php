<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubCourseCategoryStoreRequest;
use App\Http\Requests\SubCourseCategoryUpdateRequest;
use App\Http\Requests\PaginateRequest;
use App\Models\CourseCategory;
use App\Models\SubCourseCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCourseCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $subCourseCategories = SubCourseCategory::with(['course_category'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // return $subCourseCategories;

        return Inertia::render('Backend/SubCourseCategory/Index', [
            'subCourseCategories' => $subCourseCategories,
            'request' => $request,
            'courseCategories' => CourseCategory::all(),
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
    public function store(SubCourseCategoryStoreRequest $request)
    {
        SubCourseCategory::create($request->validated());
        return to_route('backend.sub_course_category.index');
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
    public function update(SubCourseCategoryUpdateRequest $request, SubCourseCategory $sub_course_category)
    {
        $sub_course_category->update($request->validated());
        return to_route('backend.sub_course_category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubCourseCategory $sub_course_category)
    {
        $sub_course_category->delete();
        return to_route('backend.sub_course_category.index');
    }
}
