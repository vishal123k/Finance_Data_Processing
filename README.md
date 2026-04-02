# Finance Data Processing & Access Control Backend

# Overview

This project is a backend system for a finance dashboard that manages financial records with role-based access control.It demonstrates backend architecture, API design, validation, error handling, and secure access management.

# Tech Stack
Node.js, Express.js, MongoDB (Mongoose), JWT Authentication


# Architecture

The project follows a layered architecture

Route → Middleware → Controller → Service → Model → Database


# Roles & Permissions
                           
Viewer   Can view dashboard only                
Analyst  Can view records & analytics           
Admin    Full access (CRUD + analytics + users) 


# Authentication

JWT-based authentication
Token required for protected routes
Inactive users cannot login


# Features

# User Management

Register/Login users
Assign roles (viewer, analyst, admin)
Active/Inactive status

# Financial Records

Create, Read, Update, Delete records
Filter by:
  type (income/expense)
  category

# Dashboard APIs

Total income
Total expenses 
Net balance
Category-wise summary
Monthly trends

# Access Control
Role-based access control using middleware

# Validation & Error Handling

Input validation 
Centralized error handling
Proper HTTP status codes


# API Endpoints

Auth APIs:-

POST `/api/auth/register`
POST `/api/auth/login`

Records APIs:-

POST `/api/records` (Admin only)
GET `/api/records` (Admin & Analyst)
PUT `/api/records/:id` (Admin only)
DELETE `/api/records/:id` (Admin only)

Dashboard APIs:-

GET `/api/dashboard`
GET `/api/dashboard/category`
GET `/api/dashboard/monthly`


# Testing
APIs tested using Thunder Client / Postman.


1. Clone repository:- git clone <your-repo-link>
cd backend


2. Install dependencies :- npm install


3. Create env file :- 

PORT=5000
MONGO_URI=
JWT_SECRET=


4. Run server :- npm start


Future Improvements:-

Pagination
Search functionality


This backend system demonstrates clean architecture, role-based security, and efficient data handling for a finance dashboard application.

The focus was on correctness, maintainability, and logical design.
