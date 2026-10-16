# TarusKira

A mobile web application designed for market vendors to manage inventory, track transactions, and view sales statistics. Built with a Laravel backend and a React & TypeScript frontend.

## Features

* 📦 **Inventory Management:** Track stock levels, product details, and vendor inventory items.
* 💳 **Transaction Tracking:** Record and monitor sales transactions easily.
* 📊 **Sales Statistics:** View real-time sales insights and performance statistics.

---

## Getting Started

### Prerequisites
* PHP (>= 8.2 recommended)
* Composer
* Node.js & npm
* MySQL or PostgreSQL

### Installation

1. Clone the repository:
   git clone https://github.com/VER-SI/TarusKira.git
   cd TarusKira

2. Install PHP dependencies:
   composer install

3. Install JavaScript dependencies:
   npm install

4. Configure your environment file:
   cp .env.example .env

5. Generate the application key:
   php artisan key:generate

6. Configure your database settings inside the `.env` file (DB_DATABASE, DB_USERNAME, DB_PASSWORD), then run migrations:
   php artisan migrate

7. Start the development servers:
   - For backend: php artisan serve
   - For frontend/assets: npm run dev

---

## Built With
* **Backend:** Laravel, PHP
* **Frontend:** React, TypeScript
* **Database:** MySQL
