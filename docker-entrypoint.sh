#!/bin/sh
set -e

# Inspire-first
php artisan inspire

# Cache configuration
# php artisan config:clear
# php artisan config:cache

# Run the application
exec "$@"
