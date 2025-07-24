# Discussion Platform

A full-stack discussion platform built with Next.js, TypeScript, and Prisma. Users can create topics, posts, and comments, with authentication and a modern UI.
Live Demo: https://discussion-pi.vercel.app/

---

## Features

- User authentication (NextAuth.js)
- Topic, post, and comment creation
- Nested comments
- Search functionality
- Responsive, modern UI (NextUI, Ant Design icons)
- Type-safe backend and frontend (TypeScript)

---

## Tech Stack

- **Next.js** – Full-stack React framework (SSR, API routes)
- **TypeScript** – Type safety and maintainability
- **Prisma** – Type-safe ORM for database access
- **NextAuth.js** – Authentication for Next.js
- **NextUI** – Modern React UI components
- **Ant Design Icons** – Icon set for UI
- **Zod** – Form validation (recommended)
- **Axios** – HTTP client (recommended)

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd discussion
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your DB and auth secrets.
4. **Set up the database:**
   ```bash
   npx prisma migrate dev --name init
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
6. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## Directory Structure

- **/prisma/** – Database schema and migrations
- **/src/actions/** – Server actions for forms and business logic
- **/src/app/** – Next.js app directory (routing, layouts, pages)
- **/src/components/** – Reusable React components
- **/src/db/** – Database access and queries
- **/src/types/** – TypeScript interfaces for models
- **/src/paths.ts** – Route path helpers
- **/public/** – Static assets (SVGs, favicon)

---

## How It Works

- **Authentication:** Handled by NextAuth.js. Users sign in/out via the header.
- **Topics:** Users create and browse topics.
- **Posts:** Each topic has posts. Users can create and view posts.
- **Comments:** Each post can have nested comments.
- **Search:** Users can search posts by term.
- **Database:** All data is stored in a relational DB (SQLite/Postgres), accessed via Prisma.
- **UI:** Built with NextUI and Ant Design icons.

---

## Contributing

1. Fork the repo and create your branch.
2. Follow the code style and naming conventions.
3. Add/Update types for all new code.
4. Write tests for new features.
5. Submit a pull request with a clear description.

---

