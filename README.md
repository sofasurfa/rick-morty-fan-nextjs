 # Rick and Morty Fan Site (Starter Pack Example)
 🤷‍♂️ Looking for the perfect example using the latest and greatest? **You came to the right place!**
 - React/NextJS
 - Apollo GraphQL (SSR - server side rendering)
 - Redux
 - Tailwinds / Shadcn

 Data fetched via GraphQL API from [rickandmortyapi.com](https://rickandmortyapi.com)
![](https://github.com/sofasurfa/rick-morty-fan-nextjs/blob/main/live-example.gif)

# How to start?
Just run `pnpm run dev` (use `pnpm` instead of `npm` - [here's why](https://refine.dev/blog/pnpm-vs-npm-and-yarn/#why-not-npm-or-yarn))

# Wait there's no need for `node myServer.js`?
No, NextJS is a framework that runs on top of NodeJS on port `3000` / `localhost:3000` with its own default server. For custom GraphQL server, REST API, authenticaion logic [you can create your own server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)

# Work in progress
Feel free to commit to this project

## Todos
- Use `localStorage` for likes in `/providers/redux-store.js`
- Keep states alive when going back/forward
- Adopt more SSR practices 