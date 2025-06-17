import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function CallbackPage() {
  const { isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      navigate("/"); // or wherever you want to go after login
    }
  }, [isLoading, navigate]);

  if (error) return <div>Oops: {error.message}</div>;
  return <div>Loading...</div>;
}
