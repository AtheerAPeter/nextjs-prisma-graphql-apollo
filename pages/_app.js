import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import clinet from "../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={clinet}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
