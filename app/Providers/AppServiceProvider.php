<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Fix issue #14
        if ($this->app->environment('production')) {
            // Fix pagination error (no https) #17
            $this->app['request']->server->set('HTTPS','on');
            URL::forceScheme('https');
        }

        Vite::prefetch(concurrency: 3);
    }
}
