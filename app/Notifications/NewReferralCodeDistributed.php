<?php

namespace App\Notifications;

use App\Models\ReferralCode;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewReferralCodeDistributed extends Notification implements ShouldQueue
{
    use Queueable;

    public ReferralCode $referral_code;

    /**
     * Create a new notification instance.
     */
    public function __construct(ReferralCode $referral_code)
    {
        $this->referral_code = $referral_code;
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
            ->line('Code referral_code baru telah di terbitkan.')
            ->line($this->referral_code->code)
            ->action('Lihat ReferralCode', route('user_area.referral_code.show', [
                'referral_code' => $this->referral_code->id
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
            'message' => 'Kode Referral baru telah di terbitkan.',
            'action_url' => route('user_area.referral_code.show', [
                'referral_code' => $this->referral_code->id
            ]),
        ];
    }
}
