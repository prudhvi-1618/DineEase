# 🍽️ Digital Diner

A simple and responsive web-based restaurant ordering system that allows users to browse a menu, add items to a cart, and place pickup orders. Built using the **MERN stack** with **PostgreSQL** integration.

---

## 🚀 Project Overview

**Digital Diner** aims to enhance the customer experience for a small restaurant by enabling online order placement for pickups. This prototype demonstrates hybrid data architecture using both **MongoDB** (for flexible menu items) and **PostgreSQL** (for structured order history).

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:**
  - **MongoDB** – for menu items (flexible schema)
  - **PostgreSQL** – for customer orders and order items (structured, relational)
- **ORMs:**
  - Mongoose (MongoDB)
  - node-postgres (PostgreSQL)

---

## ⚙️ Features

### 👀 Menu Display
- Browse menu items by category: Appetizers, Main Course, Desserts, Drinks, etc.
- Each item includes name, image, description, and price.

### 🛒 Cart System
- Add/remove items to cart
- Quantity selection (optional)
- Cart displays total price

### 📦 Order Placement
- Submit order with customer name and phone number
- Cart contents saved to PostgreSQL
- Menu item IDs reference MongoDB documents

### 📜 Order History
- View past orders by phone number
- Fetched from PostgreSQL, enriched with MongoDB item details

---
# 📦 Digital Diner – API Documentation & Setup Guide

---

## 📂 API Endpoints

### 🔹 `GET /api/menu`
- Fetch all menu items  

### 🔹 `GET /api/menu/categories`
- Get all unique menu categories from MongoDB

### 🔹 `POST /api/orders`
- Place a new order  
- Request body includes customer info and cart items

### 🔹 `GET /api/orders/history?phone=NUMBER`
- Fetch all orders by phone number  
- Includes full menu item details (merged from MongoDB)

---

## 💻 How to Run Locally

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deployment

- **Frontend:** Deployed on [Vercel](https://www.vercel.com/)
- **Backend:** Hosted via [Render](https://render.com)
