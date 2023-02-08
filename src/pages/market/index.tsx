import { Card, Skeleton } from "@mui/material";
import Page from 'src/components/Page';
import { useGetStats } from './graphql';
import { TablePresentation } from "./TablePresentation";

export default function MarketCapPage() {

    const { data, loading, error } = useGetStats({});
    console.log(data, loading, error);

    return (
        <Page title="Crypto in Numbers | Stats">
            {loading && <Skeleton variant="rectangular" animation="wave" width={210} height={118} />}
            <Card>
                <TablePresentation data={data || []} />
            </Card>
        </Page>
    );
}


