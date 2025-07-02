<?php

namespace App\Notifications;

use App\Models\Forum;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewForumCreated extends Notification
{
    use Queueable;

    public Forum $forum;

    /**
     * Create a new notification instance.
     */
    public function __construct(Forum $forum)
    {
        $this->forum = $forum;
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
            ->greeting('Hello Pelajar!')
            ->line('Forum baru dengan judul "' . $this->forum->title . '" telah di buka')
            ->action('Lihat Forum', route('learning_area.course.forum.show', [
                'course' => $this->forum->discussionable_id,
                'forum' => $this->forum->id,
            ]))
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
            'message' => 'Forum baru dengan judul "' . $this->forum->title . '" telah di terbitkan',
            'action_url' => route('learning_area.course.forum.show', [
                'course' => $this->forum->discussionable_id,
                'forum' => $this->forum->id,
            ]),
        ];
    }
}
