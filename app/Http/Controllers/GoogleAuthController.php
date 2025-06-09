<?php

namespace App\Http\Controllers;


use Google\Client as Google_Client;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        $client = new Google_Client();
        $client->setClientId(config('services.google.client_id'));
        $client->setClientSecret(config('services.google.client_secret'));
        $client->setRedirectUri(config('services.google.redirect'));
        $client->setScopes(['https://www.googleapis.com/auth/youtube.upload']);
        $client->setAccessType('offline'); // penting untuk refresh token
        $client->setPrompt('consent');

        return redirect($client->createAuthUrl());
    }

    public function handleGoogleCallback()
    {
        $client = new Google_Client();
        $client->setClientId(config('services.google.client_id'));
        $client->setClientSecret(config('services.google.client_secret'));
        $client->setRedirectUri(config('services.google.redirect'));

        $client->authenticate(request('code'));
        $token = $client->getAccessToken();

        // Simpan refresh_token di database atau .env
        $refreshToken = $token['refresh_token'];
        // Misalnya: simpan ke file
        file_put_contents(storage_path('app/google_refresh_token.json'), json_encode($refreshToken));

        return "Refresh Token berhasil disimpan";
    }
}
