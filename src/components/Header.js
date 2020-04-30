import { useIsAuthenticated } from '../providers/Auth';

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <header>
      <a href="/">Home</a> |{' '}
      {isAuthenticated ? (
        <a href="/logout">Logout</a>
      ) : (
        <a href="/login">Login</a>
      )}
      <hr />
    </header>
  );
}
