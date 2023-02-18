import React from 'react';
import { ApolloProvider } from "@apollo/client";

import gqlClient from 'src/graphql/client';

type Props = {
    children: React.ReactNode;
}

export default function AppApolloProvider({ children }: Props) {

    return (
        <ApolloProvider client={gqlClient}>
            {children}
        </ApolloProvider>
    );
}
