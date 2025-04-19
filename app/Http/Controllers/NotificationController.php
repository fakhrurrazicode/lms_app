<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function open_notification(DatabaseNotification $notification)
    {
        $notification->markAsRead();
        return Redirect::to($notification->data['action_url']);
    }
}
