
import { gql, useQuery } from '@apollo/client';

type ARGS = {
    page?: number;
    take?: number;
    search?: string;
    sort?: string;
    sort_dir?: string;
}

export const GET_STATS = gql`
query (
    $page : Int! = 1,
    $take: Int! = 25,
    $search: String = "",
    $sort: MARKET_CAP_SORT = MARKET_CAP,
    $sort_dir: OPTIONAL_COING_META_FIELDS  = DESC
    )
{
  result: coinStats (page: $page, take: $take, search: $search, sort: $sort, sort_dir: $sort_dir)
  {
    id
    symbol
    name
    usd_price
    creationDate
    cmc_rank
    max_supply
    circulating_supply
    total_supply
    market_cap_usd
    icon
    atl
    ath
    platform
    {
      id
      name
      symbol
      token_address
    }    
    sparkline_in_7d
  }
}
`;

export const GET_MARKET_PRICE = `
query tickerData ($ids: [String!]!)
{
  result : coinMarketPrice(ids : $ids)
  {
    id
    symbol
    name
    image
    current_price
    p_change_24h
  }
}
`;

export const GET_MARKET_PRICE_GQL = gql`${GET_MARKET_PRICE}`;

const useGetStats = (args: ARGS) => {

    const { loading, error, data, fetchMore } = useQuery(GET_STATS, { variables: {...args}});

    const loadMore = (loadMoreArgs: ARGS) => {
        fetchMore({
            variables: {
                page: loadMoreArgs.page,
                take: loadMoreArgs.take,
                search: loadMoreArgs.search,
                sort: loadMoreArgs.sort,
                sort_dir: loadMoreArgs.sort_dir
            },
            updateQuery: (prev: any, { fetchMoreResult }) => {

                if (!fetchMoreResult)
                    return prev;

                return {
                    result: [ ...prev.result, ...fetchMoreResult.result ]
                }
            }
        });
    }

    return {
        loadMore,
        loading,
        error,
        data: data?.result || [],
    }
}  

export default useGetStats;