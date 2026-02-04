# Catalyst Society Platform

A minimal full-stack starter with a React + Vite + Tailwind frontend and a Node.js + Express backend.

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB (local or hosted)

## Backend setup

```bash
cd catalyst-society-platform/backend
cp .env.example .env
```

Edit `.env` and set `MONGODB_URI` to your MongoDB connection string.

Install dependencies and start the server:

```bash
npm install
npm run dev
```

The backend runs on `http://localhost:5000`.

## Frontend setup

```bash
cd catalyst-society-platform/frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/health` requests to the backend.

## Health check

Open the frontend, click **Run Health Check**, and check the browser console for the JSON response from `/health`.
