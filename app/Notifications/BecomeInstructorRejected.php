<?php

namespace App\Notifications;

use App\Models\InstructorInfo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BecomeInstructorRejected extends Notification
{
    use Queueable;

    public InstructorInfo $instructor_info;

    /**
     * Create a new notification instance.
     */
    public function __construct(InstructorInfo $instructor_info)
    {
        $this->instructor_info = $instructor_info;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting('Hello!')
            ->line('Pengajuanmu untuk menjadi pengajar telah di tolak. dengan alasan:')
            ->line($this->instructor_info->verification_message)
            ->action('Ajukan Kembali', route('user_area.become_instructor.status'))
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
            'message' => 'Pengajuanmu untuk menjadi pengajar telah di tolak',
            'action_url' => route('user_area.become_instructor.status'),
        ];
    }
}
