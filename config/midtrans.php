<?php

return [
    'server_key' => env('MIDTRANS_SERVER_KEY'),
    'client_key' => env('MIDTRANS_CLIENT_KEY'),
    'is_production' => env('APP_ENV') === 'production', // Toggle for testing/production
    'is_3ds' => false, // Enable 3D Secure if required
];
