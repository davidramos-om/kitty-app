import { Card, Skeleton } from "@mui/material";

import Page, { DashboardLayout } from 'src/components/Page';
import client from "src/graphql/client";
import { GET_STATS } from "src/graphql/queries";
import TablePresentation from "./TablePresentation";

MarketCapPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;


export async function getStaticProps() {

    const { data, loading } = await client.query({
        query: GET_STATS,
        variables: {}
    });

    return {
        props: {
            loading,
            tokens: data?.result || [],
        },
    };
}

export default function MarketCapPage({ loading, tokens }: any) {
    
    return (
        <Page title="Crypto in Numbers | Stats">
            {loading && <Skeleton variant="rectangular" animation="wave" width="100%" height={118} />}
            <Card>
                <TablePresentation data={tokens || []} />
            </Card>
        </Page>
    );
}


