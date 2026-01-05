# Employee Registration & Management System

## Overview
This is a full-stack Employee Registration and Management System built using **React JS, Java (Spring Boot), and MySQL**.  
The application supports complete CRUD operations and demonstrates frontend–backend integration with a relational database.

## Tech Stack
- **Frontend:** React JS
- **Backend:** Java (Spring Boot, REST APIs)
- **Database:** MySQL
- **Tools:** Git, Postman

## Features
- Register new employees with:
  - Name
  - Email
  - Phone
  - Department
- Fetch and display existing employees from MySQL
- Update employee details directly from the UI
- Delete employee records with immediate UI updates
- RESTful API communication between frontend and backend

## Application Flow
1. User submits employee details via React form
2. React app sends data to backend using REST APIs
3. Backend processes requests and performs CRUD operations on MySQL
4. Updated data is reflected in the UI in real time

## Screenshots


## How to Run the Project

### Backend
1. Configure MySQL database and import the provided SQL file
2. Update database credentials in `application.properties`
3. Run the Spring Boot application

### Frontend
1. Navigate to the frontend folder
2. Run `npm install`
3. Run `npm start`
4. Access the app at `http://localhost:3000`

## Future Improvements
- Authentication & authorization
- Pagination and search
- Better form validation
- Improved UI/UX

