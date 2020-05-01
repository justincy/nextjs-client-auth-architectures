import { NextPage } from 'next';
import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 */
export default function withoutAuth<P>(
  WrappedComponent: NextPage<P>,
  location = '/profile'
): NextPage<P> {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  });
}
