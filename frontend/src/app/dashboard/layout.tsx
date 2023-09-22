"use client";
import { useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextProvider,
  useAuthContext,
} from "../context/AuthContext";
import { useRouter } from "next/navigation";
import signOut from "../../firebase/auth/signout";
import Link from "next/link";
import { ApolloWrapper } from "../ApolloWrapper";
import { useQuery } from "@apollo/client";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const performLogout = async () => {
    const { result, error } = await signOut();

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/dashboard/signin");
  };

  const goOnLogin = async () => {
    return router.push("/dashboard/signin");
  };

  return (
    <AuthContextProvider>
      <AuthContext.Consumer>
        {({ userContext }: any) => {

          console.log("userContext", userContext);

          console.log("userContext?.user?.accessToken", userContext?.user?.accessToken)

          return (
            <ApolloWrapper token={userContext?.user?.accessToken}>
              <section>
                <nav>
                  <ul>
                    <li>
                      <Link href="/dashboard/lessons">Lessons</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/video">Video</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/lessons">Contact</Link>
                    </li>
                  </ul>
                  <div>
                    {userContext?.user ? (
                      <div>
                        <p>Logged in as {userContext.user.email}</p>
                        <button onClick={() => performLogout()}>Log out</button>
                      </div>
                    ) : (
                      <button onClick={() => goOnLogin()}>Log in</button>
                    )}
                  </div>
                </nav>

                {children}
              </section>
            </ApolloWrapper>
          );
        }}
      </AuthContext.Consumer>
    </AuthContextProvider>
  );
}
