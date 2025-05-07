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


function generateSingkatan($name, $minLength = 2)
{
    $words = preg_split('/\s+/', trim($name));
    $singkatan = '';

    foreach ($words as $word) {
        if ($word !== '') {
            $singkatan .= strtoupper(mb_substr($word, 0, 1));
        }
    }

    if (count($words) === 1) {
        // Kalau hanya 1 kata, ambil minLength huruf pertama dari kata itu
        $singkatan = strtoupper(mb_substr($words[0], 0, $minLength));
    }

    return $singkatan;
}
