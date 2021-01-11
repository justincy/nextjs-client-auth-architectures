import Layout from '../components/Layout';
import { withAuth } from '../lib';

export default function Profile() {
  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
};

export const getServerSideProps = withAuth;
