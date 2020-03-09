# Kanban-server

**Register**
----
  
* **URL**

  `http://localhost:3000/register`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
        username: "user",
        email: "user@mail.com",
        password: "12345"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br / 

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "password cannot less than 5 character" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "username cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "email cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "email must contain email format" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`