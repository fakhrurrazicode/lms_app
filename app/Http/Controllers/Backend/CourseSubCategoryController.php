<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseSubCategoryStoreRequest;
use App\Http\Requests\CourseSubCategoryUpdateRequest;
use App\Http\Requests\PaginateRequest;
use App\Http\Resources\CourseSubCategoryResource;
use App\Models\CourseCategory;
use App\Models\CourseSubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseSubCategoryController extends Controller
{

    public function data(CourseCategory $courseCategory = null)
    {

        $sub_course_categories = CourseSubCategory::where('course_category_id', $courseCategory ? $courseCategory->id : null)->get();

        return CourseSubCategoryResource::collection($sub_course_categories);
    }
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $courseSubCategories = CourseSubCategory::with(['course_category'])->orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        // return $courseSubCategories;

        return Inertia::render('Backend/CourseSubCategory/Index', [
            'courseSubCategories' => $courseSubCategories,
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
    public function store(CourseSubCategoryStoreRequest $request)
    {
        CourseSubCategory::create($request->validated());
        return to_route('backend.course_sub_category.index');
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
    public function update(CourseSubCategoryUpdateRequest $request, CourseSubCategory $course_sub_category)
    {
        $course_sub_category->update($request->validated());
        return to_route('backend.course_sub_category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseSubCategory $course_sub_category)
    {
        $course_sub_category->delete();
        return to_route('backend.course_sub_category.index');
    }
}
