# Next.js Client-Side Authentication Architectures

This repo is contains example architectures for detecting
the user's authenticated state client-side in Next.js when
using an HttpOnly cookie. It was developed to support two
blog posts:

1. [Detecting Authentication Client-Side in Next.js with an HttpOnly Cookie When Using SSR](https://dev.to/justincy/detecting-authentication-client-side-in-next-js-with-an-httponly-cookie-when-using-ssr-4d3e). This example uses `getInitialProps` and is
   available in two variations:
   - [Plain JS](ssr)
   - [TypeScript](ssr-ts)
2. [Detecting a User's Authenticated State Client-Side in Next.js using an HttpOnly Cookie and Static Optimization](https://dev.to/justincy/detecting-a-user-s-authenticated-state-client-side-in-next-js-using-an-httponly-cookie-and-static-optimization-6ib).
   - [Plain JS](static)
   - [TypeScript](static-ts)
