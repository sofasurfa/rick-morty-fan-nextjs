 # ⭐️ Rick and Morty Fan Site (NextJS Starter Pack)
 ### 🔎 Looking for the perfect (no bloat) NextJS example using the latest and greatest?
 ### ***You came to the right boilerplate!***
 - React/NextJS
 - Apollo GraphQL (SSR/Suspense with [server side queries](https://www.npmjs.com/package/@apollo/experimental-nextjs-app-support))
 - Redux (state management)
 - Tailwinds.css / Shadcn (fully responsive flex/grid)

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
- Add/generate `<title>/<meta>` tags using NextJS `Metadata` fo SEO 
- Use `localStorage` for persistence (after page reload) for likes in `/providers/redux-store.js`
- Keep states alive when going back/forward
- Add useful comments so javascript begineers know what the code is doing
- Remove some unused code and unrelated comments
- Make a mobile menu (hamburger icon that opens a side bar)
- Keep using SSR practices going forward

## 💪 Possible future of this peoject
### 🚀 Vision: the go-to NextJS front/backend repo that people can modify to ***build things faster***
1) Run in **Docker** with `NodeJS` and `Postgres` in a single container (add a `/build` folder with **Dockerfile** and **compose.yml** inside)
2) Create our own backend Apollo GraphQL API endpoint with schema and resolvers (instead of using an external API)
3) Use `@graphql-codegen/cli` to generate JS types/models
4) Add character images to `pulibc` folder, nextJS will [serve them automatically](https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets)
5) Have a `initDatabase.sql` script `RUN` by Docker that will create database/tables and pre-populate with character data, images being the `path/name` from public folder
6) Don't use `prisma` for Postgres as the ORM - maybe go vanilla SQL via [Postgres.js](https://github.com/porsager/postgres) or [something promissing](https://github.com/alfateam/orange-orm). Why? some prisma [problems](https://github.com/keinsell/is-prisma-production-ready) + people report issues with `pgBouncer` in production)
7) Allow users to leave a review on each character
8) Signup/Login using JWT and `localStorage` - don't use cookies due to **CSRF attacks**
9) Feel free to come up with anything else 🤯💥👽

# 😵 SSR/Suspense? I am a confused cookie
To understand SSR and Streaming, [read this](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense). NextJS makes it easy to render things on the server first (at least partially). This helps search engine crawlers (Google,Bing,Yandex) to find your `<title>/<meta>` tags improving your SEO. Though, you have to [add some extra code](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) to include the tags on each page. And remember: you are a smart 🍪!

# 🥚 Find the egg
🎉 There's an **easter egg** waiting for you  


