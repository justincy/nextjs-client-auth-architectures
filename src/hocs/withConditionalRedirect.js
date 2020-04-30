import { useRouter } from 'next/router';

/**
 * Support conditional redirecting, both server-side and client-side.
 *
 * Client-side, we can use next/router. But that doesn't exist on the server.
 * So on the server we must do an HTTP redirect. This component handles
 * the logic to detect whether on the server and client and redirect
 * appropriately.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param condition A function that returns a boolean representing
 * whether to perform the redirect. It will always be called, even on
 * the server. This is necessary so that it can have hooks in it (since
 * can't be inside conditionals and must always be called).
 * @param location The location to redirect to.
 */
export default function withConditionalRedirect({
  WrappedComponent,
  condition,
  location
}) {
  const WithConditionalRedirectWrapper = props => {
    const router = useRouter();
    const redirectCondition = condition();
    if (typeof window !== 'undefined' && redirectCondition) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };
  return WithConditionalRedirectWrapper;
}
