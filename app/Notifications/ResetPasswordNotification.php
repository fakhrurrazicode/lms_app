<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotificationBase;
use Illuminate\Notifications\Messages\MailMessage;

class ResetPasswordNotification extends ResetPasswordNotificationBase
{
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Atur Ulang Kata Sandi Anda')
            ->greeting('Halo!')
            ->line('Anda meminta pengaturan ulang kata sandi untuk akun Anda.')
            ->action('Atur Ulang Kata Sandi', url(route('password.reset', [
                'token' => $this->token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false)))
            ->line('Jika Anda tidak meminta ini, Anda tidak perlu melakukan tindakan apa pun.')
            ->salutation('Salam, Tim Aplikasi Anda');
    }
}
