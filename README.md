# Style My Occasion Full Stack Project

Style My Occasion is a fashion and styling platform that helps users discover outfit ideas for different occasions such as birthdays, weddings, office meetings, and parties. The project is split into a React frontend and a Spring Boot backend, giving a complete full-stack setup for browsing occasion-based outfit recommendations and managing user/auth-related data.

This repository contains:
- Frontend: React + Vite application for the user-facing website
- Backend: Spring Boot REST API with JPA and MySQL for data persistence
- Shared monorepo structure for local development and deployment

## Project overview

The frontend presents a polished fashion website with pages for:
- Home page
- About Us
- Birthday outfits
- Wedding outfits
- Office meeting styles
- Party outfits
- Occasion styles
- Feedback form
- Login and signup

The backend exposes REST endpoints for:
- User signup and login
- Occasion data management
- Outfit data management
- Feedback collection and retrieval

The app is designed around a typical full-stack flow:
- frontend sends requests to backend API
- backend validates and processes data
- backend stores information in a MySQL database
- frontend renders dynamic content and interaction based on API responses

## Tech stack

Frontend
- React 19
- Vite
- React Router
- CSS modules and custom styling
- JavaScript/JSX

Backend
- Java 21
- Spring Boot 4.1.1
- Spring Web MVC
- Spring Data JPA
- MySQL Connector/J
- Spring Security Crypto (for password hashing)
- JWT-style token flow via custom utility class

## Architecture

The project is organized as a monorepo with two independent app folders:

- `stylemyoccasion-frontend/` — client application
- `stylemyoccasion-backend/` — server application

Frontend to backend communication:
- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:8080`
- Backend uses CORS configuration to allow requests from the frontend origin

## Project structure

```text
stylemyoccasion-fullstack/
├── README.md
├── stylemyoccasion-frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── public/
│   │   ├── birthdays.json
│   │   ├── office-meeting.json
│   │   ├── partys.json
│   │   ├── wedding.json
│   │   ├── stylemyoccasion.json
│   │   └── ...
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── index.css
│       ├── Components/
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── HomePage.jsx
│       │   ├── AboutUs.jsx
│       │   ├── Birthday.jsx
│       │   ├── Wedding.jsx
│       │   ├── Officemeetings.jsx
│       │   ├── Party.jsx
│       │   ├── OccassionStyle.jsx
│       │   ├── FeedBack.jsx
│       │   ├── Login.jsx
│       │   ├── SignUp.jsx
│       │   └── ThankYou.jsx
│       └── ...
└── stylemyoccasion-backend/
    ├── pom.xml
    ├── mvnw
    ├── .mvn/
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com/stylemyoccasion/
    │   │   │       ├── controller/
    │   │   │       ├── model/
    │   │   │       ├── repository/
    │   │   │       ├── service/
    │   │   │       ├── util/
    │   │   │       └── StylemyoccasionBackendApplication.java
    │   │   └── resources/
    │   │       └── application.properties
    │   └── test/
    └── ...
```
## Wireframes

Backend Wireframe (StyleMyOccasion) – Figma : https://www.figma.com/design/KOku9jUxQLiokL6v8YIQiC/Backend-Wireframe--StyleMyOccasion-?node-id=0-1&p=f&t=zvXQNMDLkvnaR4P5-0

Frontend Wireframe (StyleMyOccasion) – Figma :https://www.figma.com/site/7BINQy5pfJq9j9zHVIYRhc/Style-My-Occasion?node-id=0-1&p=f&t=Xd1n5btBE2qcDxtJ-0

## Frontend features

The frontend is built around a fashion content website for occasion-based style discovery.

Included sections:
- Home screen with brand storytelling and navigation
- Occasion-specific outfit browsing pages
- Feedback section for users to share suggestions and design ideas
- Login and signup flow for user accounts
- Navigation with React Router for page-level routing

Key frontend route structure:
- `/` — Home page
- `/login` — Login page
- `/signup` — Signup page
- `/aboutUs` — About page
- `/feedback` — Feedback page
- `/birthday` — Birthday styles
- `/wedding` — Wedding styles
- `/OfficeMeetings` — Office meeting styles
- `/Party` — Party wear styles
- `/OccassionStyle` — Occasion overview page

The application also reads JSON content from `public/` for categories like:
- `birthdays.json`
- `wedding.json`
- `office-meeting.json`
- `partys.json`
- `stylemyoccasion.json`

## Backend features

The backend is a Spring Boot REST API responsible for data and user operations.

Core entities:
- `User` — manages user identity and authentication fields
- `Occasion` — stores occasion metadata and links
- `Outfits` — stores outfit information and related occasion association
- `Feedback` — stores user feedback, comments, rating, and outfit references

Primary controllers:
- `UserController` — `/api/users`
- `OccasionController` — `/api/occasion`
- `OutfitsController` — `/api/outfits`
- `FeedbackController` — `/api/feedback`

User authentication flow:
- passwords are stored using BCrypt hashing via Spring Security Crypto
- login validates email and password against stored records
- successful requests return a response payload containing user details and token-like data

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js 18+ and npm
- Java 21
- Maven
- MySQL 8+
- Git

## Database setup

Create a MySQL database named:

```sql
CREATE DATABASE `style-my-occasion`;
```

Then configure the backend datasource in:

`stylemyoccasion-backend/src/main/resources/application.properties`

Example configuration:

```properties
spring.application.name=stylemyoccasion-backend
spring.datasource.url=jdbc:mysql://localhost:3306/style-my-occasion
spring.datasource.username=root
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
jwt.secret=stylemyoccasion-super-secret-key-2026
jwt.expiration=86400000
```

Notes:
- Replace the password with your local MySQL password.
- Keep the JWT secret in a secure environment for real production deployments.
- `ddl-auto=update` is convenient for local development.

## Running the backend

From the repository root:

```bash
cd stylemyoccasion-backend
mvn spring-boot:run
```

The backend typically starts at:
- `http://localhost:8080`

To build a production package:

```bash
cd stylemyoccasion-backend
mvn clean package
```

## Running the frontend

From the repository root:

```bash
cd stylemyoccasion-frontend
npm install
npm run dev
```

Frontend local URL:
- `http://localhost:5173`

To build the frontend for production:

```bash
cd stylemyoccasion-frontend
npm run build
```

## API reference

### User endpoints

#### POST `/api/users/signup`
Creates a new user.

Example request body:

```json
{
  "name": "Sudha",
  "email": "sudha@example.com",
  "password": "secret123",
  "role": "user"
}
```

Expected behavior:
- password is hashed before saving
- user is saved in the `users` table

#### POST `/api/users/login`
Authenticates an existing user.

Example request body:

```json
{
  "email": "sudha@example.com",
  "password": "secret123"
}
```

Expected response:
- successful login returns a token/user payload
- unsuccessful login returns a `401` with an error message

#### GET `/api/users`
Returns list of all registered users.

### Occasion endpoints

#### GET `/api/occasion`
Returns all occasions.

#### GET `/api/occasion/{id}`
Returns a single occasion by ID.

#### POST `/api/occasion`
Creates one or many occasion records.

#### PUT `/api/occasion/{id}`
Updates an occasion by ID.

#### DELETE `/api/occasion/{id}`
Deletes an occasion by ID.

### Outfit endpoints

#### POST `/api/outfits`
Creates outfit records.

#### GET `/api/outfits/occasion/{occasionId}`
Returns outfits filtered by occasion ID.

### Feedback endpoints

#### POST `/api/feedback`
Creates feedback.

#### GET `/api/feedback`
Returns all feedback entries.

#### GET `/api/feedback/{id}`
Returns a single feedback entry by ID.

#### GET `/api/feedback/outfit/{title}`
Returns feedback filtered by outfit title.

## Frontend and backend integration

The system is intended to work in a standard full-stack flow:

1. User visits frontend pages and browses outfit ideas.
2. User signs up or logs in via frontend forms.
3. Frontend sends HTTP requests to the backend.
4. Backend validates data, interacts with MySQL, and returns JSON.
5. Frontend renders the data and updates the UI dynamically.

Local development environment:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- MySQL database: `style-my-occasion`

## Security notes

This project includes foundational security features for local development, but it should not be treated as production hardened without further work.

Recommended production improvements:
- use environment variables for secrets
- add JWT validation middleware or security configuration
- use HTTPS
- restrict CORS to trusted domains
- avoid exposing sensitive user data in API responses
- add role-based authorization and protected routes

## Development workflow

Typical full-stack development cycle:

1. Start MySQL.
2. Run backend with `mvn spring-boot:run`.
3. Run frontend with `npm run dev`.
4. Update frontend components and route pages.
5. Add or modify backend model/service/controller layers as needed.
6. Use API testing tools such as Postman or curl for validation.

## Common troubleshooting

### Backend cannot connect to database
- verify MySQL is running
- confirm database name matches `style-my-occasion`
- check username and password in `application.properties`
- confirm MySQL port `3306` is open

### Frontend cannot reach backend
- ensure backend is running on port `8080`
- confirm CORS is configured properly
- verify the frontend is using the correct API URL

### Login or signup fails
- check that the database tables were created successfully
- confirm email is unique and password is not empty
- verify backend logs for validation and persistence errors

### Build issues
- run `npm install` for frontend dependencies
- run `mvn clean install` for backend dependencies
- ensure Java 21 is being used by your environment

## Deployment guidance

For a deployment setup, consider:
- frontend deployed to Vercel, Netlify, or GitHub Pages
- backend deployed to Render, Railway, AWS, Azure, or a VPS
- MySQL hosted in a managed cloud service
- environment variables used for database and JWT config

## Contribution

Contributions are welcome.

Suggested workflow:
1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Validate frontend and backend behavior
5. Open a pull request with a clear description

## Project summary

Style My Occasion combines a creative fashion experience with a simple, practical backend-driven architecture. It is an excellent example of a full-stack web project that blends:
- modern React frontend UX
- structured Spring Boot backend APIs
- MySQL persistence
- real-world user and content management features

This repository is a good starting point for a fashion catalog, occasion-based shopping or styling platform, and can be expanded with admin panels, product pages, order flows, or user-specific recommendation systems.
