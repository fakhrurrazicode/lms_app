<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function __construct()
    {
        Inertia::setRootView('frontend'); // Set `admin.blade.php` as default for this controller
    }

    public function index()
    {
        return Inertia::render('Home');
        // return Inertia::render('Home')->rootView('frontend');
    }
}
