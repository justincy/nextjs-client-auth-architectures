import { useEffect } from "react";
import { useAuth } from "../providers/Auth";
import withAuth from "../hocs/withAuth";

export default withAuth(function Logout() {
  const { setAuthenticated } = useAuth();
  useEffect(async () => {
    const response = await fetch("/api/logout");
    if (response.status === 200) {
      setAuthenticated(false);
    } else {
      console.error("Failed to logout", response);
    }
  }, []);
  return <p>Logging out...</p>;
}, "/");
