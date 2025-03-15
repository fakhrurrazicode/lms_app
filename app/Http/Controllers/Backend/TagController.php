<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagStoreRequest;
use App\Http\Requests\TagUpdateRequest;
use App\Http\Requests\PaginateRequest;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PaginateRequest $request)
    {
        $courseCategories = Tag::orWhere([
            ['name', 'LIKE', '%' . $request->search . '%'],
            ['slug', 'LIKE', '%' . $request->search . '%'],
        ])->orderBy($request->orderby, $request->ordermethod)->paginate($request->perpage)->withQueryString();

        return Inertia::render('Backend/Tag/Index', [
            'courseCategories' => $courseCategories,
            'request' => $request,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Tag/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TagStoreRequest $request)
    {
        Tag::create($request->validated());
        return to_route('backend.tag.index');
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
    public function edit(Tag $tag)
    {
        return Inertia::render('Backend/Tag/Edit', compact('tag'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TagUpdateRequest $request, Tag $tag)
    {
        $tag->update($request->validated());
        return to_route('backend.tag.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return to_route('backend.tag.index');
    }
}
