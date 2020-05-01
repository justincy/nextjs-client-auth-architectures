import Link from 'next/link';
import { useIsAuthenticated } from '../providers/Auth';

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      {isAuthenticated ? (
        <>
          <Link href="/profile">
            <a>Profile</a>
          </Link>{' '}
          |{' '}
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
      <hr />
    </header>
  );
}
