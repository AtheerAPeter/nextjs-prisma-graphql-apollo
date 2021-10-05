import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { createContext } from "../../graphql/context";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
