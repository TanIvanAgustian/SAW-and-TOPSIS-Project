import { ApolloClient, InMemoryCache } from '@apollo/client';

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: "https://factual-seahorse-82.hasura.app/v1/graphql",
    headers:{
        "x-hasura-admin-secret": "lxAAmkuVhPq2026onv4G69h783KHtHceoy2Ot7j1mkw37I9vAofSe64gQTKtb3ge"
    }
});

const wsLink = new WebSocketLink({
    uri: "wss://factual-seahorse-82.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers:{
                "x-hasura-admin-secret": "lxAAmkuVhPq2026onv4G69h783KHtHceoy2Ot7j1mkw37I9vAofSe64gQTKtb3ge"
            }
        }
    }
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" && definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;