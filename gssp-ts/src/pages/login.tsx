import { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../providers/Auth';
import { withoutAuth } from '../lib';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthenticated } = useAuth();
  const router = useRouter();
  const submitHandler = async event => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (response.status === 200) {
      setAuthenticated(true);
      router.push('/profile');
    } else {
      console.error('Login error', response);
    }
  };
  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Username{' '}
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password{' '}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export const getServerSideProps = withoutAuth;
