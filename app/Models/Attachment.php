<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\File;

class Attachment extends BaseModel
{

    public static function boot()
    {
        parent::boot();

        Attachment::deleting(function ($attachment) {
            $attachment->attachments()->delete();
            $file = public_path('storage/' . $attachment->file);
            // dd(File::exists($file));
            if (File::isFile($file)) {
                File::delete($file);
            }
        });
    }

    protected $guarded = [];
    protected $appends = ['file_url'];

    public function attachable(): MorphTo
    {
        return $this->morphTo();
    }

    public function getFileUrlAttribute()
    {
        return $this->file ? url('/storage/' . $this->file) : '';
    }
}
