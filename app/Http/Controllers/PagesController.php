<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
// use Binafy\LaravelCart\Models\Cart;
use App\Models\CourseCategory;
use App\Http\Requests\PaginateRequest;
use Binafy\LaravelCart\Models\CartItem;

class PagesController extends Controller
{

    // public function __construct()
    // {
    //     Inertia::setRootView('frontend'); // Set `admin.blade.php` as default for this controller
    // }

    public function index()
    {

        $latestCourses = Course::with(['course_category', 'instructor'])->orderBy('created_at', 'DESC')->limit(3)->get();
        return Inertia::render('Welcome', compact('latestCourses'));
    }

    public function courses(PaginateRequest $request)
    {
        // return $request;
        $courses = Course::query();

        if ($request->has('course_category_ids')) {
            $courses->whereIn('course_category_id', $request->course_category_ids);
        }

        if ($request->has('search')) {
            $courses->where([
                ['title', 'LIKE', '%' . $request->search . '%'],
                ['slug', 'LIKE', '%' . $request->search . '%'],
            ]);
        }

        $courses = $courses->orderBy($request->orderby, $request->ordermethod)
            ->with(['instructor', 'course_category', 'course_reviews'])
            ->paginate($request->perpage)
            ->withQueryString();


        return Inertia::render('Courses', [
            'courses' => $courses,
            'request' => $request,
            'course_categories' => CourseCategory::whereHas('courses')->orderBy('name', 'asc')->get(),
        ]);
    }

    public function course($slug)
    {

        $course = Course::where('slug', $slug)->with([
            'instructor',
            'course_category',
            'course_reviews',
            'course_sections.course_lectures',
            'course_lectures'
        ])->firstOrFail();


        // return $course;
        return Inertia::render('Course', compact('course'));
    }

    public function become_an_instructor()
    {
        return Inertia::render('BecomeAnInstructor');
    }

    public function cart(Request $request)
    {
        $user = $request->user();
        $cart = Cart::query()->firstOrCreate(['user_id' => $user->id]);
        $cartItems = CartItem::where([
            'cart_id' => $cart->id,
        ])->with(['itemable'])->get();

        // return $cartItems;
        return Inertia::render('Cart', compact('cartItems'));
    }

    public function addToCart(Request $request)
    {
        // return $request->all();
        $user = $request->user();
        $cart = Cart::query()->firstOrCreate(['user_id' => $user->id]);

        $cartItem = new CartItem([
            'itemable_id' => $request->itemable_id,
            'itemable_type' => $request->itemable_type,
            'quantity' => 1,
        ]);
        $cart->items()->save($cartItem);

        // to_route('page.cart');
    }

    public function removeFromCart(Request $request)
    {
        // return $request->all();
        // return $request->itemable_type::find($request->itemable_id);
        $user = $request->user();
        $cart = Cart::query()->firstOrCreate(['user_id' => $user->id]);

        CartItem::where([
            'itemable_type' => $request->itemable_type,
            'itemable_id' => $request->itemable_id,
            'cart_id' => $cart->id,
        ])->delete();

        // // return $itemable;
        // $cart->removeItem($itemable);
    }

    public function clearCart(Request $request)
    {
        $user = $request->user();
        $cart = Cart::query()->firstOrCreate(['user_id' => $user->id]);
        $cart->emptyCart();

        // // return $itemable;
        // $cart->removeItem($itemable);
    }

    public function checkout(Request $request)
    {
        $user = $request->user();

        $cart = Cart::query()->firstOrCreate(['user_id' => $user->id]);
        // return $cart;

        return Inertia::render('Checkout', compact('cart'));
    }
}
