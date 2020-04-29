import Layout from "../components/Layout";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Username{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
