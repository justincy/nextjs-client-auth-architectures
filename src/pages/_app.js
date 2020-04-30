import React from 'react';
import App from 'next/app';
import cookie from 'cookie';
import { AuthProvider } from '../providers/Auth';

class MyApp extends App {
  render() {
    const { Component, pageProps, authenticated } = this.props;
    return (
      <AuthProvider authenticated={authenticated}>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

MyApp.getInitialProps = async appContext => {
  let authenticated = false;
  const request = appContext.ctx.req;
  if (request) {
    request.cookies = cookie.parse(request.headers.cookie || '');
    authenticated = !!request.cookies.session;
  }

  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, authenticated };
};

export default MyApp;
