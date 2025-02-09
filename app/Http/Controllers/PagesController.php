<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{

    // public function __construct()
    // {
    //     Inertia::setRootView('frontend'); // Set `admin.blade.php` as default for this controller
    // }

    public function index()
    {
        return Inertia::render('Welcome');
    }

    public function courses()
    {
        return Inertia::render('Courses');
    }

    public function course()
    {
        return Inertia::render('Course');
    }
}
