<?php

namespace App\Helpers;

function minutesToHumanReadable($minutes)
{
    $days = floor($minutes / 1440); // 1 hari = 1440 menit
    $hours = floor(($minutes % 1440) / 60);
    $mins = $minutes % 60;

    $result = [];
    if ($days > 0) $result[] = "{$days} hari";
    if ($hours > 0) $result[] = "{$hours} jam";
    if ($mins > 0) $result[] = "{$mins} menit";

    return implode(' ', $result);
}
