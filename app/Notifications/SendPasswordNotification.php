<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendPasswordNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $password;

    public function __construct($password)
    {
        $this->password = $password;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Kata Sandi Akun Anda')
            ->greeting('Selamat datang di ' . config('app.name') . '!')
            ->line('Terima kasih telah mendaftar menggunakan akun Google.')
            ->line('Berikut adalah kata sandi akun Anda yang telah dibuat otomatis:')
            ->line('**' . $this->password . '**')
            ->action('Masuk Sekarang', route('login'))
            ->line('Anda dapat mengganti kata sandi ini kapan saja setelah login.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
