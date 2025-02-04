# Stage 1: Node Build Stage
FROM node:18-alpine AS node-build

WORKDIR /app

COPY . .

# Install npm dependencies and run Vite build
RUN npm install --include=dev && npm run build


# Stage 2: FrankenPHP Stage
FROM dunglas/frankenphp:alpine

# Install PHP extensions
RUN apk add --no-cache \
    git \
    zip \
    libpng-dev \
    libjpeg-turbo-dev \
    libzip-dev \
    curl \
    && apk add --no-cache --virtual .build-deps \
    autoconf \
    gcc \
    g++ \
    make \
    && install-php-extensions \
    pcntl \
    zip \
    ctype \
    curl \
    dom \
    fileinfo \
    filter \
    hash \
    mbstring \
    openssl \
    pcre \
    pdo \
    pdo_pgsql \
    session \
    tokenizer \
    xml \
    gd \
    && apk del .build-deps
    # Add other PHP extensions here...

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . /app
COPY --from=node-build /app/public ./public

RUN composer install \
    --classmap-authoritative \
    --no-interaction \
    --no-ansi \
    --no-dev \
    && composer clear-cache
RUN php artisan optimize \
    && php artisan config:clear \
    && php artisan storage:link

RUN chmod +x ./docker-entrypoint.sh

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]
CMD ["php", "artisan", "octane:frankenphp", "--host=0.0.0.0", "--port=8000", "--caddyfile=Caddyfile"]

EXPOSE 8000
