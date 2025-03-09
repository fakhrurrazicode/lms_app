<?php

namespace App\Http\Controllers\InstructorArea;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('InstructorArea/Dashboard');
    }
}
