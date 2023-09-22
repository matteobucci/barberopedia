"use client";
// ^ this file needs the "use client" pragma

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { PropsWithChildren } from "react";

const httpLink = createHttpLink({
  uri: 'http://localhost:5050/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

interface ApolloWrapperProps {
  token: string;
}

export function ApolloWrapper({
  children,
  token
}: PropsWithChildren<ApolloWrapperProps>) {

  // const { data: session } = useSession();
  // const sessionRef = useRef(session);
  // useEffect(() => {
  //   sessionRef.current = session;
  // }, [session]);

  // const makeClientWithAuth = React.useCallback(
  //   () => makeClient(token),
  //   [token]
  // );

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
