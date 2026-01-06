Doctor Appointment System (Microservices)

A containerized backend for managing doctor appointments. Each service runs in its own Docker container and communicates via an API Gateway.

Services & Ports

API Gateway: 4000

Auth / Patient / Doctor / Appointment / Notification Services: 3000 each

Quick Start
docker-compose pull
docker-compose up -d


Health Check: http://localhost:4000/health

APIs:

Auth: /auth

Users: /users

Doctors: /doctors

Appointments: /appointments

Notifications: /notifications

CI/CD

GitHub Actions automatically builds and pushes Docker images to Docker Hub on each main push.

Fully reproducible and isolated deployment.
