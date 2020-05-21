# Using `getInitialProps` to Detect Auth in SSR

This example shows how to use `getInitialProps` to detect a user's
authenticated state during SSR. Static optimization is not supported
with this architecture. If you need to support static optimization
(hint: you should) then you should use the variation of this which
[detects auth client-side](../static). The architecture is explained in
this [blog post](https://dev.to/justincy/detecting-authentication-client-side-in-next-js-with-an-httponly-cookie-when-using-ssr-4d3e).
This example is also available in [TypeScript](../ssr-ts).
