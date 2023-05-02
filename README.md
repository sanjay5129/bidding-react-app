## Base Bid Application

Basic bid application with login and sign-in portal.
User can add bid-items and update its bid price.

## Pre-requisites

- NodeJS: v18.15.0
- NPM: v9.5.0
- Yarn: v1.22.19
- OS: Ubuntu 20.04LTS+/ Mac 13+
- Docker version 23.0.4 [Mandatory]
- Docker Compose version v2.17.2 [[Mandatory]
- \*\*NOTE --> docker, docker-compose commands should work without sudo

## Cloning the Repo

```
git clone git@github.com:sanjay5129/bidding-react-app.git
```

```
cd bidding-react-app
```

## Environment Variable Setup

- At project root, execute:

```
cp .env.example .env
```

- This will create a .env at project root.
- A sample example of working .env looks like:

```
PORT=12345
DB_PORT=27017
DB_NAME=bp-boilerplate
JWT_SECRET_KEY=test-boilerplate
MONGO_DB_URI=mongodb://mongo_db:27017
```

- You are ready to move to the next steps

## Add the dependencies

```
yarn
```

## Start the Dev Environment for backend and frontend

### Backend Setup

At root directory itself, execute the below command to run the BACKEND

```
docker compose up
```

- It may take few seconds to few minutes depending on your machine to make the Backend container up
- This should bring up the backend development server at localhost:4000
- API Documentation comes up live at localhost:4000/api

### Frontend Setup

Execute the below command at the root directory:

```
yarn workspace web-client start

```

This will bring up the react development server at localhost:3000

## App Description & Features

- Signup at http://localhost:3000/sign-up
- Login at http://localhost:3000/login

- User need to sign-up first from the sign-up portal.
- This is an indeed basic signup and we can just put in our details and it gets signed in.
- Then we can use same credentials for login, once the signup is done.
- When we login with correct credentials, a table dashboard will come up. We can create, update and view the bid items here
- If the token is invalid or expired, the application will get logged out and you need to login again

## What could have been done if test task would have provided more time?

- UI/UX Improvement keeping color theory in mind
- Some sort of centralised logging in Frontend
- Deposit flow requirement was not very clear so just included a basic UI for that

## Techstack used :

- React
- TypeScript
- Material UI
- NestJS
- MongoDB
- Docker

## NOTE:

- Contact the repo owner in case of any confusion
- Follow Environment Prerequisites strictly to avoid issues wih setup
