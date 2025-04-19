<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BecomeInstructorApproved extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting('Hello!')
            ->line('Pengajuanmu untuk menjadi pengajar telah di setujui.')
            ->action('Lanjutkan', route('user_area.become_instructor.create'))
            ->line('Terima kasih telah menggunakan guruteknik.com');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => 'Pengajuanmu untuk menjadi pengajar telah di setujui.',
            'action_url' => route('user_area.become_instructor.create'),
        ];
    }
}
