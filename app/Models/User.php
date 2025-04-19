<?php

namespace App\Models;

use Spatie\Activitylog\LogOptions;
// use Illuminate\Auth\MustVerifyEmail;
use Binafy\LaravelCart\Models\Cart;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, LogsActivity;

    protected $with = ['cart', 'instructor_info'];

    protected $appends = ['photo_url', 'role_name'];

    public function getPhotoUrlAttribute()
    {
        return $this->photo ? url('/storage/' . $this->photo) : asset('assets/images/no-image.jpeg');
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
}
