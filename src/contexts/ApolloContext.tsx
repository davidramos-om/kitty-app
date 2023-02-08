import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { SITE_SETTINGS } from 'src/config';

const client = new ApolloClient({
    uri: SITE_SETTINGS.ccm_api,
    cache: new InMemoryCache()
});


type Props = {
    children: React.ReactNode;
}

export default function ApolloContext({ children }: Props) {

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
