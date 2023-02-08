
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

//create hooks 
export const useGetStats = (args: ARGS) => {

    const { loading, error, data, fetchMore } = useQuery(GET_STATS, {
        variables: args
    });


    //add load more function
    const loadMore = (args: ARGS) => {
        fetchMore({
            variables: {
                page: args.page,
                take: args.take,
                search: args.search,
                sort: args.sort,
                sort_dir: args.sort_dir
            },
            updateQuery: (prev: any, { fetchMoreResult }) => {

                if (!fetchMoreResult)
                    return prev;

                return Object.assign({}, prev, {
                    result: [ ...prev.result, ...fetchMoreResult.result ]
                });
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