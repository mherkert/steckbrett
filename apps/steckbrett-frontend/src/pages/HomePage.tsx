import { useAuth0 } from "@auth0/auth0-react";

export function HomePage() {
  const { isLoading } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Home</div>;
}