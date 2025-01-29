<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\UserQuizProgress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index(Request $request)
    {
        $quizProgress = $request->user()->quizProgress;
        $ranks = UserQuizProgress::with('user')
            ->orderByDesc('correct_count')
            ->orderBy('total_duration')
            ->limit(7)
            ->get();

        return Inertia::render(
            'Quiz',
            compact('quizProgress', 'ranks')
        );
    }

    public function answerQuestion(Request $request, int $level)
    {
        $user = $request->user();
        $question = Question::with('answers')
            ->where('level', $level)
            ->first();

        // Jika level yang dicari tidak ditemukan
        if (!$question) {
            return back();
        }

        // Jika level yang dibuka tidak sesuai
        if ($user->quizProgress->current_level < $level) {
            return back();
        }

        $previousAnswer = $user->answers()->where('question_id', $question->id)->first();
        $quizProgress = $user->quizProgress;

        return Inertia::render(
            'QuizAnswer',
            compact('question', 'previousAnswer', 'quizProgress')
        );
    }

    public function submitAnswer(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'question_id' => 'required|exists:questions,id',
            'answer_id' => 'required|exists:answers,id',
            'duration' => 'required|numeric',
        ]);

        if ($user->answers()->where('question_id', $request->question_id)->exists()) {
            // reject
            return back();
        }

        $answer = Answer::where('question_id', $request->question_id)
            ->where('id', $request->answer_id)
            ->firstOrFail();

        DB::transaction(function () use ($user, $request, $answer) {
            $user->answers()->create([
                'question_id' => $request->question_id,
                'answer_id' => $request->answer_id,
                'duration' => $request->duration,
                'is_correct' => $answer->is_correct
            ]);

            $user->quizProgress->updateOrCreate(
                [
                    'user_id' => $user->id
                ],
                [
                    'current_level' => $user->quizProgress->current_level >= 15
                        ? 15
                        : $user->quizProgress->current_level + 1,
                    'correct_count' => $user->quizProgress->correct_count + ($answer->is_correct ? 1 : 0),
                    'wrong_count' => $user->quizProgress->wrong_count + ($answer->is_correct ? 0 : 1),
                    'total_duration' => $user->quizProgress->total_duration + $request->duration,
                ]
            );
        });

        return back();
    }
}
