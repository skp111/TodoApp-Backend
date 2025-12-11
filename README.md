TodoApp Backend ⚡

A RESTful API backend built using Node.js, Express, and MongoDB to power the TodoApp frontend.
Handles secure CRUD operations for todos, JWT-based authentication, and automated email reminders.

✨ Features
🔹 CRUD endpoints for todos (create, read, update, delete)
🔹 JWT-based authentication for secure access
🔹 Automated email reminders using cron jobs
🔹 CORS enabled to interact with frontend
🔹 Environment-based configuration

🛠️ Technologies Used
🔹Node.js – Runtime environment
🔹Express – Server framework
🔹MongoDB (Mongoose) – Database
🔹JWT – Authentication
🔹BREVO – Email notifications
🔹Node Cron – Scheduled tasks

💻 API Endpoints

Todos
🔹GET /api/todos – Retrieve all todos
🔹POST /api/todos – Create a new todo
🔹PUT /api/todos/:id – Update a todo
🔹DELETE /api/todos/:id – Delete a todo

Internal / Cron Jobs
🔹GET /api/internal/send-email-cron – Trigger automated email reminders

🌐 Environment Variables
🔹URL – MongoDB connection string
🔹PORT – Server port
🔹FRONTEND_URL – Frontend URL
🔹BACKEND_URL – Backend URL
🔹JWT_SECRET – Secret key for JWT
🔹NODE_ENV – Environment (development/production)
🔹BREVO_API_KEY – API key for email
🔹CRON_KEY – Key for triggering cron endpoint
🔹CRON_URL – Cron job endpoint
