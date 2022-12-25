/* eslint-disable @next/next/no-html-link-for-pages */
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1 className="text-center text-4xl text-blue-400">Welcome to Meta</h1>
      <div className="mt-12 flex justify-center space-x-2">
        {!session && (
          <>
            <p>You are not logged in</p>
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Signin
            </a>
          </>
        )}
        {session && (
          <>
            Welcome {session.user.name}!{" "}
            {session.user.image && (
              <img src={session.user.image} alt="user image" />
            )}
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
