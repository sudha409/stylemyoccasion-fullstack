# stylemyoccasion-backend

Spring Boot backend for Style My Occasion — a simple REST API for managing users, outfits, occasions and feedback used by the Style My Occasion frontend.

Table of Contents
- Project overview
- Requirements
- Getting started (build & run)
- Configuration
- Database schema
- Authentication (BCrypt + JWT)
- API reference
- Development notes
- Tests
- Contributing
- License

Project overview
This service exposes CRUD endpoints for Users, Outfits, Occasions and Feedback. It uses Spring Boot, Spring Data JPA, and MySQL by default. Authentication is implemented using BCrypt for password hashing and JWT for stateless session tokens.

Requirements
- Java 21 (installed and JAVA_HOME set)
- Maven (or use your IDE's bundled Maven)
- MySQL (or swap the JDBC URL for your DB)

Getting started
1. Configure database in `src/main/resources/application.properties` (see Configuration).
2. Build the project:

   mvn -DskipTests package

3. Run the app:

   mvn spring-boot:run

4. The service will be available at: http://localhost:8080

Configuration
Edit `src/main/resources/application.properties` or set environment variables.
Important properties used by this project:
- spring.datasource.url — JDBC URL for MySQL
- spring.datasource.username
- spring.datasource.password
- spring.jpa.hibernate.ddl-auto — currently `update` for local development
- jwt.secret — HMAC secret for signing JWTs (default present in properties; override in production)
- jwt.expiration — token TTL in milliseconds (default 86400000 = 24h)

Database schema (models overview)
- User (table `users`): id (PK), name, email (unique), password (BCrypt hash), role
- Outfits: domain model stored in `outfits` table
- Occasion: domain model stored in `occasion` table
- Feedback: domain model stored in `feedback` table

Authentication
- Signup: passwords are hashed using BCrypt before persisting.
- Login: verifies password against stored BCrypt hash. On success the API returns a JSON object with `token` (JWT) and `user` (user details).
- JWT implementation details:
  - Implemented using jjwt (io.jsonwebtoken).
  - Token claims include subject=email, id, role, issuedAt, expiration.
  - Signing uses HMAC with the `jwt.secret` from application properties.

API reference (key endpoints)
- POST /api/users/signup
  - Request body: { name, email, password, role }
  - Response: created User object (password is stored hashed)

- POST /api/users/login
  - Request body: { email, password }
  - Response: 200 { token: "<jwt>", user: { id, name, email, role } } on success
  - Failure: 401 { message: "Invalid email or password" }

- GET /api/users
  - Returns list of users (primarily useful for debugging/dev)

Other controllers (Outfits, Occasion, Feedback)
- Check `src/main/java/com/stylemyoccasion/controller` for route definitions and request/response shapes. Follow similar patterns to the User endpoints.

Development notes
- Keep secrets out of source control. In production, provide `jwt.secret` through environment variables or a secrets manager.
- Consider enabling HTTPS and CORS configuration for production.
- Add role-based authorization and secure endpoints using Spring Security if you need protected resources.
- Add DTOs and map entities to avoid returning sensitive fields (e.g., password) in API responses.

Testing
- Unit and integration tests can be added under `src/test/java`.
- For quick manual tests, use Postman or curl against the running server.

Contributing
- Fork the repo, create a feature branch, and submit a PR with a clear description and tests if applicable.

Troubleshooting
- "Cannot connect to database": verify JDBC URL, user, password and that MySQL is running.
- "JWT signature invalid": ensure the `jwt.secret` used to sign and to verify tokens is identical and sufficiently long.

License
Add your preferred license in this file.

Notes
This README is a living document; update it when new endpoints, configuration options, or authentication flows are added.
