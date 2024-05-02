"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user)
    return (
      <div className="flex gap-2">
        <div>
          <p>hello {user.name}</p>
          <img src={user.picture} alt="Your Picture" />
        </div>
        <div>Your email address: {user.email}</div>
        <div>Your fucking nickname: {user.nickname}</div>
        <input type="datetime-local" />
        <div></div>
        <button
          style={{
            backgroundColor: "red",
            padding: "5px",
            border: "2px",
            borderRadius: "5px",
          }}
        >
          <a
            href="/api/auth/logout"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Log out
          </a>
        </button>
      </div>
    );
  return (
    <div className="w-full h-full">
      <div className="flex-row gap-20 ">
        <div>
          <a
            href="/api/auth/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </a>
        </div>
        <div>
          <a
            href="/api/auth/signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}
