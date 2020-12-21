import React from 'react'
import App1 from "./components/App1"
import { ApolloProvider } from '@apollo/client';
import client from "./config/graphql_config";

export default function App() {
    return (
        <div>
        <ApolloProvider client={client}>
            <App1 />
        </ApolloProvider>
        </div>
    )
}
