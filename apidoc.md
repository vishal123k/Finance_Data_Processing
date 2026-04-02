# API Documentation

# Auth

Register
POST `/api/auth/register`

{
  "name": "vishal",
  "email": "vishalk38916@gmail.com",
  "password": "123456",
  "role": "admin"
}


Login
POST `/api/auth/login`


Records
Create Record (Admin only)

POST `/api/records`
{
  "amount": 5000,
  "type": "income",
  "category": "salary"
}



Get Records
GET `/api/records`


Update Record
PUT `/api/records/:id`

Delete Record
DELETE `/api/records/:id`


Dashboard

GET `/api/dashboard`


Category-wise
GET `/api/dashboard/category`


Monthly
GET `/api/dashboard/monthly`

