import { NextPage } from 'next';
import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be authenticated in order to render the component.
 * If the user isn't authenticated, forward to the given URL.
 */
export default function withAuth<P>(
  WrappedComponent: NextPage<P>,
  location = '/login'
): NextPage<P> {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: true
  });
}
