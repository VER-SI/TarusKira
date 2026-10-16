# TarusKira

A mobile web application designed for market vendors to manage inventory, track transactions, and view sales statistics. Built as an independent personal project outside of school, utilizing a React & TypeScript frontend with a Laravel application structure.

> ⚠️ **Note:** This repository currently features the **frontend interface prototype** using local mock data. Backend database functionality and persistent database connections are not yet integrated.

---

## Features

- 📦 **Inventory Management:** View stock levels, product details, and vendor inventory layouts.
- 💳 **Transaction Tracking:** Mock interfaces for recording and monitoring sales transactions easily.
- 📊 **Sales Statistics:** Visualized sales insights and performance statistics with sample data.

---

## Getting Started

### Prerequisites
- Node.js & npm
- PHP (>= 8.2 recommended)
- Composer

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

6. Start the development servers:
   - For backend/routing: php artisan serve
   - For frontend assets & UI: npm run dev

---

## Built With

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend Framework:** Laravel (PHP)

---

## What I Learned

- **Mobile-First Responsive Design:** Having typically designed for larger laptop screens, this project challenged me to adapt my UI layout strategies specifically for compact mobile viewports, focusing on touch targets and screen real estate.
- **Independent Project Scoping:** Building this outside of school allowed me to self-direct product decisions, prioritize frontend user flow, and design specifically for market vendor usability.
- **Frontend State & Mocking:** Structuring interface components to accept mock vendor datasets before integrating live database tables.
