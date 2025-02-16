<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index(Request $request)
    {
        $date = $request->date ?? now()->format('Y-m-d');
        $schedules = $request->user()->schedules;

        return Inertia::render('Community', compact('date', 'schedules'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'date' => 'required|date',
            'time' => 'required|date_format:H:i'
        ]);

        $request->user()->schedules()->create([
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'time' => $request->time
        ]);

        return to_route('community', ['date' => $request->date]);
    }

    public function destroy(Request $request, Schedule $schedule)
    {
        // guard
        if ($schedule->user_id !== $request->user()->id) {
            abort(403);
        }

        $schedule->delete();
        return to_route('community', ['date' => $request->date]);
    }
}
