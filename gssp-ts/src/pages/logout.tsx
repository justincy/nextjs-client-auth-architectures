import { useEffect } from 'react';
import { useAuth } from '../providers/Auth';
import { withAuth } from '../lib';
import { useRouter } from 'next/router';

export default function Logout() {
  const { setAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    async function doLogout() {
      const response = await fetch('/api/logout');
      if (response.status === 200) {
        setAuthenticated(false);
        router.push('/');
      } else {
        console.error('Failed to logout', response);
      }
    }
    doLogout();
  }, [setAuthenticated]);
  return <p>Logging out...</p>;
};

export const getServerSideProps = withAuth;
