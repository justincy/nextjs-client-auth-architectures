import { useRouter } from 'next/router';
import { useAuth } from '../providers/Auth';

function DefaultLoadingFallback() {
  return <p>Loading...</p>;
}

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for
 * the component to be rendered.
 * @param location The location to redirect to.
 */
export default function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location
}) {
  const WithAuthRedirectWrapper = props => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();
    if (isLoading) {
      return <LoadingComponent />;
    }
    if (typeof window !== 'undefined' && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };
  return WithAuthRedirectWrapper;
}
