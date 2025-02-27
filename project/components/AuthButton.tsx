"use client"; // Only for Next.js App Router

import { useUser } from "@auth0/nextjs-auth0";

const AuthButtons: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? (
    <div>
      <p>Welcome, {user.name}!</p>
      <a href="/api/auth/logout">
        <button>Logout</button>
      </a>
    </div>
  ) : (
    <a href="/api/auth/login">
      <button>Login</button>
    </a>
  );
};

export default AuthButtons;
