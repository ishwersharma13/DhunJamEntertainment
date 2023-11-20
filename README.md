
## DhunJam Entertainment React Application
This repository contains the source code for the DhunJam Entertainment React application. The application consists of two screens: Login and Admin Dashboard.

## Deployed Link
https://655ac8708ad8c528e422dd5e--ishwerdhunjam.netlify.app/

## Screens:
Screen 1: Login
Endpoint for Login:
(POST) Admin - Login

URL: https://stg.dhunjam.in/account/admin/login

Body:

json
Copy code
{
  "username": "DJ@4",
  "password": "Dhunjam@2023"
}
Response:

json
Copy code
{
  "status": 200,
  "response": "Success",
  "data": {
    "id": 3,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9....",
  },
  "server_err_msg": null,
  "ui_err_msg": null
}
Screen 2: Admin Dashboard
Endpoint for Getting Admin Details:

(GET) Admin - Details

URL: https://stg.dhunjam.in/account/admin/4
(Replace 4 with the ID received from the successful login response)

Response:

json
Copy code
{
  "status": 200,
  "response": "Success",
  "data": {
    "id": 3,
    "name": "Byg Brewski Brewing Company",
    "location": "Hennur",
    "charge_customers": true,
    "amount": {
      "category_6": 100,
      "category_7": 80,
      "category_8": 60,
      "category_9": 40,
      "category_10": 20
    }
  },
  "server_err_msg": null,
  "ui_err_msg": null
}
## Endpoint for Price Update:

(PUT) Admin - Price Update

URL: https://stg.dhunjam.in/account/admin/4
(Replace 4 with the ID received from the successful login response)

Body:

json
Copy code
{
  "amount": {
    "category_6": 100
  }
}
Response:

json
Copy code
{
  "status": 200,
  "response": "Success",
  "data": {
    "amount": {
      "category_6": 444
    }
  },
  "server_err_msg": null,
  "ui_err_msg": null
}
