<?php

namespace App\Notifications;

use App\Models\Voucher;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewVoucherDistributed extends Notification implements ShouldQueue
{
    use Queueable;

    public Voucher $voucher;

    /**
     * Create a new notification instance.
     */
    public function __construct(Voucher $voucher)
    {
        $this->voucher = $voucher;
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
            ->greeting('Hello Pengajar!')
            ->line('Code voucher baru telah di terbitkan.')
            ->line($this->voucher->code)
            ->action('Lihat Voucher', route('user_area.voucher.show', [
                'voucher' => $this->voucher->id
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
            'message' => 'Code voucher baru telah di terbitkan.',
            'action_url' => route('user_area.voucher.show', [
                'voucher' => $this->voucher->id
            ]),
        ];
    }
}
