
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { SITE_SETTINGS } from "src/config-global";

const httpLink = createHttpLink({
    uri: SITE_SETTINGS.ccm_api,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({})
});

export default client;