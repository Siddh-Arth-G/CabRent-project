<!-- # Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user -->

# Backend API Documentation

## /users/register Endpoint Documentation

### Endpoint Description

The `/users/register` endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user information in the database. Upon successful registration, it generates an authentication token for the user.

---

### HTTP Method

`POST`

---

### Endpoint URL

`/users/register`

---

### Request Body

The request body must be in JSON format and include the following fields:

#### Required Fields

1. **email** (string)
   - Must be a valid email address.
   - Minimum length: 7 characters.
2. **fullname** (object)

   - `firstname` (string)
     - Required.
     - Must be at least 3 characters long.
   - `lastname` (string)
     - Optional.
     - If provided, must be at least 3 characters long.

3. **password** (string)
   - Required.
   - Must be at least 6 characters long.

---

### Validation Rules

1. `email` must be a valid email format.
2. `fullname.firstname` must be at least 3 characters long.
3. `password` must be at least 6 characters long.

If any validation rule fails, the endpoint returns a 400 status code with details of the validation errors.

---

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:**

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "<USER_ID>",
    "fullname": {
      "firstname": "<FIRST_NAME>",
      "lastname": "<LAST_NAME>"
    },
    "email": "<EMAIL>",
    "socketId": null
  }
}
```

#### Error Responses

1. **Validation Error**

   - **Status Code:** `400 Bad Request`
   - **Response Body:**

   ```json
   {
     "errors": [
       {
         "msg": "<ERROR_MESSAGE>",
         "param": "<FIELD_NAME>",
         "location": "body"
       }
     ]
   }
   ```

2. **Internal Server Error**

   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**

   ```json
   {
     "error": "Something went wrong. Please try again later."
   }
   ```

---

### Example Usage

#### Request

**POST** `/users/register`

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Successful Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64abf3c72c8c0e0012ef9b78",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```






## /users/login Endpoint Documentation

### Endpoint Description
The `/users/login` endpoint is used to authenticate a user by verifying their email and password. Upon successful authentication, it generates and returns an authentication token along with user details.

---

### HTTP Method
`POST`

---

### Endpoint URL
`/users/login`

---

### Request Body
The request body must be in JSON format and include the following fields:

#### Required Fields
1. **email** (string)
   - Must be a valid email address.

2. **password** (string)
   - Must be at least 6 characters long.

---

### Validation Rules
1. `email` must be a valid email format.
2. `password` must be at least 6 characters long.

If any validation rule fails, the endpoint returns a 400 status code with details of the validation errors.

---

### Response
#### Success Response
- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "token": "<JWT_TOKEN>",
    "user": {
        "_id": "<USER_ID>",
        "fullname": {
            "firstname": "<FIRST_NAME>",
            "lastname": "<LAST_NAME>"
        },
        "email": "<EMAIL>",
        "socketId": null
    }
}
```

#### Error Responses
1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**

   ```json
   {
       "errors": [
           {
               "msg": "<ERROR_MESSAGE>",
               "param": "<FIELD_NAME>",
               "location": "body"
           }
       ]
   }
   ```

2. **Invalid Credentials**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**

   ```json
   {
       "message": "Invalid email or password"
   }
   ```

3. **Internal Server Error**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**

   ```json
   {
       "error": "Something went wrong. Please try again later."
   }
   ```

---

### Example Usage
#### Request
**POST** `/users/login`

**Request Body:**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

#### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64abf3c72c8c0e0012ef9b78",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    }
}
```




## /users/profile and /users/logout Endpoint Documentation

### /users/profile Endpoint

#### Endpoint Description
The `/users/profile` endpoint is used to fetch the authenticated user's profile details. The request must include a valid authentication token.

---

#### HTTP Method
`GET`

---

#### Endpoint URL
`/users/profile`

---

#### Headers
1. **Authorization**
   - Format: `Bearer <token>`
   - Required.

---

#### Response
##### Success Response
- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "_id": "<USER_ID>",
    "fullname": {
        "firstname": "<FIRST_NAME>",
        "lastname": "<LAST_NAME>"
    },
    "email": "<EMAIL>",
    "socketId": null
}
```

##### Error Responses
1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**

   ```json
   {
       "message": "Unauthorized"
   }
   ```

2. **Internal Server Error**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**

   ```json
   {
       "error": "Something went wrong. Please try again later."
   }
   ```

---

### Example Usage

#### Request
**GET** `/users/profile`

**Headers:**
```json
{
    "Authorization": "Bearer <token>"
}
```

##### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
    "_id": "64abf3c72c8c0e0012ef9b78",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
}
```

---

### /users/logout Endpoint

#### Endpoint Description
The `/users/logout` endpoint is used to log out an authenticated user by clearing the token and blacklisting it to prevent further use.

---

#### HTTP Method
`GET`

---

#### Endpoint URL
`/users/logout`

---

#### Headers
1. **Authorization**
   - Format: `Bearer <token>`
   - Required.

---

#### Response
##### Success Response
- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "message": "Logged Out"
}
```

##### Error Responses
1. **Unauthorized**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**

   ```json
   {
       "message": "Unauthorized"
   }
   ```

2. **Internal Server Error**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**

   ```json
   {
       "error": "Something went wrong. Please try again later."
   }
   ```

---

### Example Usage

#### Request
**GET** `/users/logout`

**Headers:**
```json
{
    "Authorization": "Bearer <token>"
}
```

##### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
    "message": "Logged Out"
}
```

