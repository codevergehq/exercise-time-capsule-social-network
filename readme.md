# Exercise: Time Capsule Social Network

## **Learning Goals**

Upon completing this exercise, you will be able to:

- Design and implement MongoDB schemas using Mongoose
- Create relationships between documents using references
- Implement CRUD operations for multiple models
- Handle asynchronous operations using async/await
- Build RESTful API endpoints for a social network application

## Introduction

In this exercise, you’re tasked with building a Time Capsule Social Network where users can create digital time capsules, share memories with future recipients, and explore other users’ public time capsules.

## **Getting Started**

1. [Fork this repository](https://github.com/codevergehq/exercise-time-capsule-social-network)
2. Clone the repository to your computer
3. Open a terminal and navigate to the project directory
4. Run `npm install` to install the project dependencies
5. Review the project structure and familiarize yourself with the existing code

## Instructions

We have set up the initial project structure for you, including the initial imports and configured the `app.js` and `server.js` files. Don’t forget to run `npm install` !

Solve the tasks below to complete the Time Capsule Social Network.

### **Task 1: Create the User Model**

1. In the `models` folder, create a file named `User.model.js`
2. Define the `User` schema with the following fields:
    - `username` (String, required, unique)
    - `email` (String, required, unique)
    - `timeCapsules` (Array of ObjectIds, ref: ‘TimeCapsule’)
3. Create the `User` model using the schema
4. Export the `User` model

### **Task 2: Create the TimeCapsule Model**

1. In the `models` folder, create a file named `TimeCapsule.model.js` 
2. Define the `TimeCapsule` schema with the following fields:
    - `title` (String, required)
    - `description` (String)
    - `content` (String, required)
    - `unlockDate` (Date, required)
    - `creator` (ObjectId, ref: ‘User’, required)
    - `recipients` (Array of ObjectIds, ref: ‘User’)
    - `isPublic` (Boolean, default: false)
3. Create the `TimeCapsule` model using the schema
4. Export the `TimeCapsule` model

### **Task 3: Create the Comment Model**

1. In the `models` folder, create a file named `Comment.model.js`
2. Define the `Comment` schema with the following fields:
    - text (String, required)
    - author (ObjectId, ref: ‘User’, required)
    - timeCapsule (ObjectId, ref: ‘TimeCapsule’, required)
    - createdAt (Date, default: Date.now)
3. Create the `Comment` model using the schema
4. Export the `Comment` model

### **Task 4: Implement User Routes**

1. In the `routes` folder, create a file named `timeCapsule.routes.js` 
2. Define the following routes:
    - `POST /api/timeCapsules` - Create a new time capsule
    - `GET /api/timeCapsules` - Get all public time capsules
    - `GET /api/timeCapsules/:timeCapsuleId` - Get time capsule by ID
    - `PUT /api/timeCapsules/:timeCapsuleId` - Update time capsule
    - `DELETE /api/timeCapsules/:timeCapsuleId` - Delete time capsule
3. Implement the route handlers for each route
4. Use `async/await` to handle asynchronous operations
5. Implement error handling using `try/catch` blocks
6. Don’t forget to mount your routes on the `/api` prefix in `app.js` to ensure proper routing. This will make all routes accessible under the /api base path.

*Example:*

```jsx
const userRoutes = require('./routes/user.routes');

// Mount user routes on /api path
app.use('/api', userRoutes);
```

### **Task 5: Implement TimeCapsule Routes**

1. In the routes folder, create a file named `timeCapsule.routes.js`
2. Define the following routes:
    - `POST /api/timeCapsules` - Create a new time capsule
    - `GET /api/timeCapsules` - Get all public time capsules
    - `GET /api/timeCapsules/:timeCapsuleId` - Get time capsule by ID
    - `PUT /api/timeCapsules/:timeCapsuleId` - Update time capsule
    - `DELETE /api/timeCapsules/:timeCapsuleId` - Delete time capsule

3.	Implement the route handlers for each route

4.	Use `async/await` to handle asynchronous operations

5.	Implement error handling using `try/catch` blocks

### **Task 6: Implement Comment Routes**

1. In the `routes` folder, create a file named `comment.routes.js` 
2. Define the following routes:
    - `POST /api/timeCapsules/:timeCapsuleId/comments` - Create a new comment
    - `GET /api/timeCapsules/:timeCapsuleId/comments` - Get all comments for a specific time capsule
    - `PUT /api/comments/:commentId` - Update comment
    - `DELETE /api/comments/:commentId` - Delete comment
3. Implement the route handlers for each route
4. Use `async/await` to handle asynchronous operations
5. Implement error handling using `try/catch` blocks

### **Task 7: Test the API**

1. Use the Bruno API Client to test the implemented API endpoints
2. Verify that you can perform CRUD operations on users, time capsules and comments

### **Bonus Tasks**

1. Implement a search functionality to find time capsules based on keywords or tags
2. Add a feature to like or favorite time capsules
3. Implement error handling for validation errors (e.g., handling Mongoose `ValidationError`)

## **Submission**

When you've completed the exercise:

```jsx
git add .
git commit -m "Completed Time Capsule Social Network"
git push origin main
```

Create a Pull Request for review and submit your assignment below:

_____________________________

Happy Coding! 🙂

## Frequently Asked Questions (FAQs)


<details>
<summary>How can I handle validation errors in the routes?</summary>


You can use the try/catch block to catch any validation errors thrown by Mongoose. Here's an example of how you can handle a validation error:
    
    ```jsx
    router.post('/api/timeCapsules', async (req, res) => {
      try {
        const newTimeCapsule = await TimeCapsule.create(req.body);
        res.status(201).json(newTimeCapsule);
      } catch (error) {
        if (error.name === 'ValidationError') {
          res.status(400).json({ error: error.message });
        } else {
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    });
```

</details>

<details>
<summary>What should I do if I encounter an error while making a request?</summary>

If you encounter an error, first check the error message and stack trace to identify the cause of the error. Verify that you are sending the correct data in the request body and that the request URL and HTTP method are correct. Also, ensure that you have properly handled any asynchronous operations using async/await.

</details>
