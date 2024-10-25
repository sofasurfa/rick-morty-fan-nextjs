// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache({
//       addTypename: false,
//     }),
//     link: new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: 'SOME_URL',
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//     }),
//   });
// });
