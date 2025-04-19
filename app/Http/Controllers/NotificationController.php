<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{

    public function index()
    {
        $notifications = Auth::user()->notifications;
        // return $notifications;
        return Inertia::render('Notification/Index', compact('notifications'));
    }

    public function open_notification(DatabaseNotification $notification)
    {
        $notification->markAsRead();
        return Redirect::to($notification->data['action_url']);
    }
}
