 # ⭐️ Rick and Morty Fan Site (Starter Pack Example)
 ### 🔎 Looking for the perfect NextJS example using the latest and greatest? **You came to the right place!**
 - React/NextJS
 - Apollo GraphQL (SSR - server side rendering)
 - Redux
 - Tailwinds.css / Shadcn

 >Data fetched via GraphQL API from [rickandmortyapi.com](https://rickandmortyapi.com)
![](https://github.com/sofasurfa/rick-morty-fan-nextjs/blob/main/live-example.gif)

# 🤷‍♂️ How to start?
To start: just run `pnpm run dev` (use `pnpm` instead of `npm` - [here's why](https://refine.dev/blog/pnpm-vs-npm-and-yarn/#why-not-npm-or-yarn))
## Lint
`pnpm run lint` will lint your code via *eslint* and *Next* will tell you how to fix/optimise your code
## Format
`pnpm run format` will format via *prettier* and the code will look "pretty" in your IDE.

This also will cause your `Tailwinds` classes to be sorted (be in the right order),`prettier-plugin-tailwindcss` is maintained by the Tailwinds team so you can be sure that you are following the best practices.


# 🤨 Wait, there's no need to run `node myServer.js`?
No, NextJS is a framework that runs on top of NodeJS on port `3000` / `localhost:3000` with **its own default server.** For custom GraphQL server, REST API, authenticaion logic, etc - [you can create your own server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)

# 👷‍♂️ Work in progress
Feel free to contribute to this project so more people can get to use `NextJS` right out the box!

## 📌 Todos
- Use `localStorage` for persistence (after page reload) for likes in `/providers/redux-store.js`
- Keep states alive when going back/forward
- Add useful comments so javascript begineers know what the code is doing
- Remove some unused code and unrelated comments
- Keep using SSR practices going forward

# 🥚 Find the egg
🎉 There's an **easter egg** waiting for you


