import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { useAuth } from '../providers/Auth';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function DefaultLoadingFallback(): ReactElement {
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
export default function withAuthRedirect<CP = {}, IP = CP>({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location
}: {
  WrappedComponent: NextPage<CP, IP>;
  LoadingComponent?: NextPage;
  expectedAuth: boolean;
  location: string;
}): NextPage<CP, IP> {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = props => {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();
    if (isLoading) {
      return <LoadingComponent />;
    }
    if (isBrowser() && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
