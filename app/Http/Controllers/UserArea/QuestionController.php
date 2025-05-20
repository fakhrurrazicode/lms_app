<?php

namespace App\Http\Controllers\UserArea;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionStoreRequest;

class QuestionController extends Controller
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
        $request->validate([
            'evaluation_id' => 'required|exists:evaluations,id',
            'question' => 'required|string|max:1000',
            'type' => 'required|string|in:multiple_choice,essay',
            'items' => 'required|array|min:1',
            'items.*.text' => 'required|string|max:255',
            'items.*.is_correct' => 'required|boolean',
        ]);

        $question = Question::create([
            'evaluation_id' => $request->evaluation_id,
            'question' => $request->question,
            'type' => $request->type,
        ]);

        foreach ($request->items as $item) {
            $question->choices()->create([
                'text' => $item['text'],
                'is_correct' => $item['is_correct'],
            ]);
        }
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
    public function update(Request $request, Question $question)
    {
        $validated = $request->validate([
            'question' => 'required|string',
            'type' => 'required|string|in:multiple_choice,essay',
            'items' => 'required|array|min:1',
            'items.*.text' => 'required|string',
            'items.*.is_correct' => 'required|boolean',
        ]);

        DB::beginTransaction();

        try {
            // Update data pertanyaan
            $question->update([
                'question' => $validated['question'],
                'type' => $validated['type'],
            ]);

            // Hapus semua pilihan lama
            $question->choices()->delete();

            // Simpan pilihan baru
            foreach ($validated['items'] as $item) {
                $question->choices()->create([
                    'text' => $item['text'],
                    'is_correct' => $item['is_correct'],
                ]);
            }

            DB::commit();

            return redirect()->back()->with('success', 'Pertanyaan berhasil diubah.');
        } catch (\Throwable $e) {
            DB::rollBack();
            return back()->withErrors(['message' => 'Gagal mengubah pertanyaan: ' . $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        $question->delete();
    }
}
