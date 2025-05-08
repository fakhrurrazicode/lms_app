<?php

namespace App\Rules;

use Closure;
use Carbon\Carbon;
use App\Models\Voucher;
use Illuminate\Contracts\Validation\ValidationRule;

class VoucherIsValid implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $code = $value;
        $now = Carbon::now();

        // Voucher::where([
        //     'code' => $code,
        // ])->where([
        //     [
        //         'start_date',
        //         '<=',
        //         $now
        //     ],
        //     [
        //         'end_date',
        //         '>=',
        //         $now
        //     ],
        // ])->first();
    }
}
