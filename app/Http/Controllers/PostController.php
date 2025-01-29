<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Publish');
    }

    public function explore()
    {
        return Inertia::render('Explore');
    }
}
