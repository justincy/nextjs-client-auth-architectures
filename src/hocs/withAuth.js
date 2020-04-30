import { useIsAuthenticated } from '../providers/Auth';
import withConditionalRedirect from './withConditionalRedirect';

/**
 * Require the user to be authenticated in order to render the component.
 * If the user isn't authenticated, forward to the given URL.
 */
export default function withAuth(WrappedComponent, location = '/login') {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withAuthClientCondition() {
      return !useIsAuthenticated();
    },
    serverCondition: function withAuthServerCondition(ctx) {
      return !ctx.req?.cookies.session;
    }
  });
}
