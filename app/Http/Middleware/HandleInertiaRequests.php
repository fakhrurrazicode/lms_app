<?php

namespace App\Http\Middleware;

use Binafy\LaravelCart\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Middleware;

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
                'permissions' => $request->user() ? $request->user()->getAllPermissions()->pluck('name') : [],
                'cart' => $request->user()
                    ? Cart::with('items.itemable')->where('user_id', $request->user()->id)->first()
                    : null
            ],
            'role' => function () use ($request) {
                $user = $request->user();
                return $user ? $user->roles[0] : null;
            },
        ];
    }
}
