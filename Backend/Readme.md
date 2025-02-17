# Backend API Documentation

## `/users/register`

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






## `/users/login`

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


---

## `/users/profile`

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

## `/users/logout`

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

---

## `/captain/register`

### Overview
The `/captain/register` endpoint allows the registration of new captains in the system. Captains must provide their personal details, vehicle information, and credentials to register successfully.

---

### Endpoint
**POST** `/captain/register`

---

#### Request Body
The request body should be in JSON format and include the following fields:

#### Required Fields

- **fullname** (object)
  - **firstname** (string, required): The first name of the captain. Must be at least 3 characters long.
  - **lastname** (string, optional): The last name of the captain. Must be at least 3 characters long.

- **email** (string, required): A valid email address. Must be unique.

- **password** (string, required): The password for the captain's account. Must be at least 6 characters long.

- **vehicle** (object, required): Details of the captain's vehicle.
  - **color** (string, required): The color of the vehicle. Must be at least 3 characters long.
  - **plate** (string, required): The license plate number of the vehicle. Must be at least 3 characters long.
  - **capacity** (number, required): The seating or load capacity of the vehicle. Must be at least 1.
  - **vehicleType** (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

---

#### Example Request

#### Request Body
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword",
    "vehicle": {
        "color": "Blue",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

---

### Response

#### Success
If the captain is successfully registered, the API will return:

- **Status Code**: `201 Created`
- **Response Body**:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "64a7b2c9f1234567890abcdef",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "status": "inactive",
        "vehicle": {
            "color": "Blue",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "location": {
            "lat": null,
            "lng": null
        },
        "createdAt": "2024-12-21T10:30:00Z",
        "updatedAt": "2024-12-21T10:30:00Z",
        "__v": 0
    }
}
```

#### Validation Errors
If validation fails:

- **Status Code**: `400 Bad Request`
- **Response Body**:

```json
{
    "errors": [
        {
            "msg": "First Name must be of at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        }
    ]
}
```

#### Duplicate Email
If a captain with the provided email already exists:

- **Status Code**: `400 Bad Request`
- **Response Body**:

```json
{
    "message": "Captain already exists"
}
```

---

## `/captain/login`

#### Description
This endpoint allows captains to log in to their account using their registered email and password.

#### Method
**POST** `/captain/login`

#### Request Body
The request body should be in JSON format and include:

- **email** (string, required): The registered email address of the captain.
- **password** (string, required): The account password. Must be at least 6 characters long.

#### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

#### Success Response
- **Status Code**: `200 OK`
- **Response Body**:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "64a7b2c9f1234567890abcdef",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "status": "inactive",
        "vehicle": {
            "color": "Blue",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "location": {
            "lat": null,
            "lng": null
        },
        "createdAt": "2024-12-21T10:30:00Z",
        "updatedAt": "2024-12-21T10:30:00Z",
        "__v": 0
    }
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:

```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be of at least 6 character long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Response Body**:

```json
{
    "message": "Invalid email or password"
}
```

---

## `/captain/profile`

#### Description
This endpoint retrieves the profile of the authenticated captain.

#### Method
**GET** `/captain/profile`

#### Authentication
Requires the `Authorization` header with a valid token.

#### Example Request
**Headers:**
```
Authorization: Bearer <token>
```

#### Success Response
- **Status Code**: `200 OK`
- **Response Body**:

```json
{
    "captain": {
        "_id": "64a7b2c9f1234567890abcdef",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "status": "inactive",
        "vehicle": {
            "color": "Blue",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "location": {
            "lat": null,
            "lng": null
        },
        "createdAt": "2024-12-21T10:30:00Z",
        "updatedAt": "2024-12-21T10:30:00Z",
        "__v": 0
    }
}
```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Response Body**:

```json
{
    "message": "Unauthorized"
}
```

---

## `/captain/logout`

#### Description
This endpoint logs out the authenticated captain by invalidating their token.

#### Method
**GET** `/captain/logout`

#### Authentication
Requires the `Authorization` header with a valid token.

#### Example Request
**Headers:**
```
Authorization: Bearer <token>
```

#### Success Response
- **Status Code**: `200 OK`
- **Response Body**:

```json
{
    "message": "Logout successfully"
}
```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Response Body**:

```json
{
    "message": "Unauthorized"
}
```

---

## `/maps/get-coordinates`

### Endpoint Description
The `/maps/get-coordinates` endpoint is used to retrieve the geographical coordinates (latitude and longitude) of a given address. The request must include the address query parameter and a valid authentication token.

### HTTP Method
`GET`

### Endpoint URL
`/maps/get-coordinates`

### Query Parameters
- **address**: (Required) The address whose geographical coordinates are to be fetched.
  - Type: `String`
  - Minimum length: `3` characters
  - Example: `1600 Pennsylvania Ave NW, Washington, DC`

### Headers
- **Authorization**: (Required) A valid JWT token in the following format:
  - Format: `Bearer <token>`

### Request Example

#### Request
```http
GET /maps/get-coordinates?address=1600+Pennsylvania+Ave+NW,+Washington,+DC
Authorization: Bearer <token>
```


#### Response

##### Success Response
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
    "ltd": 38.897675,
    "lng": -77.036547
}
```

#### Description: The response will include the latitude (ltd) and longitude (lng) of the address provided in the query parameter.


#### Error Responses

- **Bad Request** (Validation Error)

- **Status Code:** 400 Bad Request

- **Response Body:**
```json
{
    "errors": [
        {
            "msg": "Invalid value",
            "param": "address",
            "location": "query"
        }
    ]
}
```

#### Coordinate Not Found

- **Status Code**: 404 Not Found

- **Response Body:**

```json
{
    "message": "Coordinate Not Found"
}
```

- **Description:** If the provided address cannot be resolved to coordinates, the server will return a 404 error indicating that coordinates could not be found.

#### Unauthorized

- **Status Code:** 401 Unauthorized

- **Response Body:**
```json
{
    "message": "Unauthorized"
}
```

- **Description:** If the authentication token is missing or invalid, a 401 Unauthorized error will be returned.


#### Internal Server Error

- **Status Code:** 500 Internal Server Error
- **Response Body:**
```json
{
    "error": "Something went wrong. Please try again later."
}
```
- **Description:** This response is returned if there is an unexpected server error.

---

## `/maps/get-distance-time`

#### Description
This API fetches the estimated distance and travel time between two locations using the Google Maps Distance Matrix API.

### HTTP Method
`GET`

### Request Parameters
The endpoint expects the following query parameters:

| Parameter    | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| `origin`     | string | Yes      | Starting location (city, address, or coordinates) |
| `destination` | string | Yes      | Destination location (city, address, or coordinates) |

### Example Request
```sh
GET /maps/get-distance-time?origin=New+York&destination=Los+Angeles
```

### Successful Response
#### Status Code: `200 OK`
```json
{
  "distance": {
    "text": "2,790 miles",
    "value": 4491715
  },
  "duration": {
    "text": "40 hours",
    "value": 144000
  },
  "status": "OK"
}
```

### Error Responses

#### Validation Errors
**Status Code: `400 Bad Request`** (When query parameters are missing or invalid)
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "origin",
      "location": "query"
    }
  ]
}
```

#### No Routes Found
**Status Code: `400 Bad Request`** (When no routes exist between locations)
```json
{
  "message": "No routes found"
}
```

#### External API Failure
**Status Code: `500 Internal Server Error`** (When Google Maps API request fails)
```json
{
  "message": "Unable to fetch distance and time"
}
```

#### Internal Server Error
**Status Code: `500 Internal Server Error`** (For unexpected errors)
```json
{
  "message": "Internal server error"
}
```

### Authentication
This endpoint requires authentication via `authMiddleware.authUser`. Make sure the user is authenticated before making requests.

### Dependencies
- Google Maps Distance Matrix API
- `axios` for API requests
- Express.js for handling requests

### Notes
- Ensure you have a valid Google Maps API key set in the `.env` file as `GOOGLE_MAPS_API`.
- The API returns data in meters for distance and seconds for duration (converted to human-readable format).
- If the origin or destination is not valid, an error is returned.

---


## `/maps/get-suggestions`

#### Method: `GET`

#### Description
This endpoint fetches autocomplete suggestions for location searches using Google Places API.

#### Request Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| input     | string | Yes      | The search query string (minimum 3 characters required). |

#### Headers
| Header          | Description |
|-----------------|--------------|
| Authorization   | Bearer token for authentication. |

#### Example Request
```
GET /maps/get-suggestions?input=New York
Authorization: Bearer <your_token>
```

---

### Responses

#### Success Response
**Status Code:** `200 OK`

**Response Body:**
```json
[
  {
    "description": "New York, NY, USA",
    "place_id": "ChIJOwg_06VPwokRYv534QaPC8g"
  },
  {
    "description": "New York County, NY, USA",
    "place_id": "ChIJqVKY50ELwokRLxOaK7a8J3M"
  }
]
```

---

### Error Responses

#### 400 Bad Request
Occurs when the `input` parameter is missing or less than 3 characters.

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "input",
      "location": "query"
    }
  ]
}
```

---

#### 401 Unauthorized
Occurs when an invalid or missing authentication token is provided.

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

#### 500 Internal Server Error
Occurs when an unexpected error happens on the server or Google API request fails.

**Response Body:**
```json
{
  "message": "Internal Server Error"
}
```

---

### Dependencies
- Google Places API (requires an API key)
- Axios for HTTP requests
- Express.js for routing
- Authentication Middleware for secured access


---


## `/rides/create`

#### Method: `POST`

#### Description
This endpoint allows authenticated users to create a ride by providing necessary details such as pickup, destination, and vehicle type.

#### Request Parameters
| Parameter    | Type   | Required | Description |
|-------------|--------|----------|-------------|
| pickup      | string | Yes      | The pickup location (minimum 3 characters). |
| destination | string | Yes      | The destination location (minimum 3 characters). |
| vehicleType | string | Yes      | The type of vehicle (`auto`, `car`, or `motorcycle`). |

#### Headers
| Header         | Description |
|---------------|-------------|
| Authorization | Bearer token for authentication. |

#### Example Request
```
POST /rides/create
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "pickup": "Downtown, NY",
  "destination": "Uptown, NY",
  "vehicleType": "car"
}
```

---

### Responses

#### Success Response
**Status Code:** `201 Created`

**Response Body:**
```json
{
  "user": "65432abcde",
  "pickup": "Downtown, NY",
  "destination": "Uptown, NY",
  "otp": "123456",
  "fare": 75.5
}
```

---

### Error Responses

#### 400 Bad Request
Occurs when input validation fails (e.g., missing fields, invalid values).

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Invalid PickUp Address",
      "param": "pickup",
      "location": "body"
    }
  ]
}
```

---

#### 401 Unauthorized
Occurs when an invalid or missing authentication token is provided.

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

#### 500 Internal Server Error
Occurs when an unexpected error happens on the server.

**Response Body:**
```json
{
  "message": "Internal Server Error"
}
```

---

### Dependencies
- Google Maps API for distance and time calculation
- Express.js for handling requests
- Crypto for OTP generation
- Authentication Middleware for secured access

---



## `/rides/get-fare`

#### Method: `GET`

#### Description
This endpoint calculates the estimated fare for a ride based on the pickup and destination locations.

#### Request Parameters
| Parameter    | Type   | Required | Description |
|-------------|--------|----------|-------------|
| pickup      | string | Yes      | The pickup location (minimum 3 characters). |
| destination | string | Yes      | The destination location (minimum 3 characters). |

#### Headers
| Header         | Description |
|---------------|-------------|
| Authorization | Bearer token for authentication. |

#### Example Request
```
GET /rides/get-fare?pickup=Downtown&destination=Uptown
Authorization: Bearer <your_token>
```

---

### Responses

#### Success Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "auto": 50.5,
  "car": 75.0,
  "motorcycle": 40.0
}
```

---

### Error Responses

#### 400 Bad Request
Occurs when input validation fails (e.g., missing fields, invalid values).

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Invalid PickUp Address",
      "param": "pickup",
      "location": "query"
    }
  ]
}
```

---

#### 500 Internal Server Error
Occurs when an unexpected error happens on the server.

**Response Body:**
```json
{
  "message": "Internal Server Error"
}
```

---

### Dependencies
- Google Maps API for distance and time calculation
- Express.js for handling requests
- Authentication Middleware for secured access

