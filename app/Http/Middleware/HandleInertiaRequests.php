<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\CourseCategory;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'role' => Auth::check() ? Auth::user()->roles[0] : null,
                'cart' => Auth::check() ? Cart::query()->firstOrCreate(['user_id' => $request->user()->id]) : null,
                'unread_notifications_count' => Auth::check()
                    ? Auth::user()->unreadNotifications->count()
                    : 0,
                'unread_notifications' => Auth::check()
                    ? Auth::user()->unreadNotifications
                    : [],
                'footer' => [
                    'course_categories' => CourseCategory::inRandomOrder()->limit(5)->get(),
                ]
            ],
        ];
    }
}
