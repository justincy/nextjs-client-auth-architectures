import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 */
export default function withoutAuth(WrappedComponent, location = '/profile') {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  });
}
