import Layout from "../components/Layout";
import withAuth from "../hocs/withAuth";

export default withAuth(function Profile() {
  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
});
