import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

const options = {
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GIT_TOKEN}`,
  },
};

const client = new ApolloClient(options);

const ApolloProviderComponent = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderComponent;
