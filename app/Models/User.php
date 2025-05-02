<?php

namespace App\Models;

use App\Models\Coin;
// use Illuminate\Auth\MustVerifyEmail;
use App\Models\Enrollment;
use Spatie\Activitylog\LogOptions;
use Binafy\LaravelCart\Models\Cart;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, LogsActivity;

    protected $with = ['cart', 'instructor_info', 'enrollments'];

    protected $appends = ['photo_url', 'role_name', 'coin_balance'];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification());
    }

    public function getPhotoUrlAttribute()
    {
        return $this->photo ? url('/storage/' . $this->photo) : asset('images/dummy/no-image.jpeg');
    }

    public function getRoleNameAttribute()
    {
        $role_names = $this->getRoleNames();
        return $role_names ? $role_names[0] : null;
    }


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
        // Chain fluent methods for configuration options
    }

    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    // protected $fillable = [
    //     'name',
    //     'username',
    //     'email',
    //     'password',
    //     'photo',
    // ];

    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function instructor_info()
    {
        return $this->hasOne(InstructorInfo::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }


    public function courses()
    {
        // return $this->
    }

    public function coins()
    {
        return $this->hasMany(Coin::class);
    }

    public function getCoinBalanceAttribute()
    {
        return $this->coins()
            ->where(function ($q) {
                $q->whereNull('expired_at')
                    ->orWhere('expired_at', '>', now());
            })
            ->sum('amount');
    }
}
