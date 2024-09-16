# Restaurant app - assignment

### Requirements

- Node >= 18.0.0
- Postgres

## Setup

Setup DB and backend side:

- You need to install docker, you can download here: [https://www.docker.com/]
- Run `docker compose up` to run the postgresDB, you can go to docker-compose.yml to update password if you want to.
- Run `pnpm install` to install all needed dependencies
- Because we setup this project with tRPC run in edge runtime so go through this article to setup accelerator of prisma which makes it able to run on edge runtime: [https://www.prisma.io/docs/accelerate/getting-started]
- Next: add .env file in your project based on .env.example file
- Or you can use my credentials, plz DM me.

## Development

### Start project

- To run project: Use `pnpm run dev`, this command also help you run seed data and migration file.
- Check src/ folder for all source file
- To run project with prisma studio use `pnpm dx`

### Commands

```bash
pnpm build      # runs `prisma generate` + `prisma migrate` + `next build`
pnpm db-reset   # resets local db
pnpm dev        # starts next.js
pnpm dx         # starts postgres db + runs migrations +
```

### Deployment

- We 're using vercel to deploy this project, you can import this project to vercel to deploy it
- You need to select nodejs version = 18.0, to make it able to run with pnpm
