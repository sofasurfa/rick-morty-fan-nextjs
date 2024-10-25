 # ⭐️ Rick and Morty Fan Site (NextJS Starter Pack)
 ### 🔎 Looking for the perfect NextJS example using the latest and greatest? **You came to the right place!**
 - React/NextJS
 - Apollo GraphQL (SSR - server side rendering)
 - Redux
 - Tailwinds.css / Shadcn

 >Data fetched via GraphQL API from [rickandmortyapi.com](https://rickandmortyapi.com)
![](https://github.com/sofasurfa/rick-morty-fan-nextjs/blob/main/live-example.gif)

# 🤷‍♂️ How to start?
**To start:** just run `pnpm run dev` (use `pnpm` instead of `npm` - [here's why](https://refine.dev/blog/pnpm-vs-npm-and-yarn/#why-not-npm-or-yarn))
## Lint
`pnpm run lint` will lint your code via *eslint* and *Next* will tell you how to fix/optimise your code
## Format
`pnpm run format` will format via *prettier* and the code will look "pretty" in your IDE.

This also will cause your `Tailwinds` classes to be sorted (be in the right order),`prettier-plugin-tailwindcss` is maintained by the Tailwinds team so you can be sure that you are following the best practices.


# 🤨 Wait, there's no need to run `node myServer.js`?
No, NextJS is a framework that runs on top of NodeJS on port `3000` / `localhost:3000` with **its own default server.** For a custom server with GraphQL/REST API, authenticaion logic, etc - [you can create your own server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)

# 👷‍♂️ Work in progress
Feel free to contribute to this project so more people can get to use **NextJS** right out the box!

## 📌 Todos
- Use `localStorage` for persistence (after page reload) for likes in `/providers/redux-store.js`
- Keep states alive when going back/forward
- Add useful comments so javascript begineers know what the code is doing
- Remove some unused code and unrelated comments
- Keep using SSR practices going forward

## 💪 Possible future of this peoject
### 🚀 Vision: the go-to NextJS front/backend repo that people can modify to ***build things faster***
1) Run in **Docker** with `NodeJS` and `Postgres` in a single container (add a `/build` folder with **Dockerfile** and **compose.yml** inside)
2) Don't use `prisma` as ORM - maybe go vanilla SQL via [Postgres.js](https://github.com/porsager/postgres) or [something promissing](https://github.com/alfateam/orange-orm). Why? some prisma [problems](https://github.com/keinsell/is-prisma-production-ready) + people report issues with `pgBouncer` in production)
3) Crate an `assets` folder with character images and serve via https
4) Have a `initDatabase.sql` script `RUN` by Docker that will create database/tables and pre-populate with character data, images being the `path/name` from assets folder
5) Create our own backend GraphQL endpoint with schema and resolvers
6) Use `@graphql-codegen/cli` to generate JS types/models
7) Allow users to leave a review on each character
8) Singup/Login using JWT and `localStorage` - don't use cookies due to **`CSRF`**
9) Feel free to come up with anything else 🤯


# 🥚 Find the egg
🎉 There's an **easter egg** waiting for you  


