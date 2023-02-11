import { useState } from "react";
import { Avatar, Chip, IconButton, Typography, Box, Grid, Tooltip } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useQuery, gql } from '@apollo/client';
import { Coin } from "src/types/Coin";
import { fCurrency, fCurrencyCap } from 'src/utils/formatNumber';


type Props = {
    value: string,
    placeholder?: string,
}


export const GET_COINS = gql`
query
{
  coins : coinStats(skip : 0 take : 100 sort :  MARKET_CAP)
  { 
	id
    name
    symbol
    rank : cmc_rank
    icon
    usd_price
    market_cap_usd    
    total_supply
    max_supply
    circulating_supply    
  }
}
`;

type CurrencyItemProps = {
    coin: Coin,
}

export function CurrencyItem({ coin }: CurrencyItemProps) {

    const { name, symbol, icon, rank, usd_price, market_cap_usd } = coin;

    const handleOpenLink = () => {
        window.open(`https://coinmarketcap.com/currencies/${name.toLowerCase()}/`, '_blank', 'noopener noreferrer');
    }

    return (
        <ListItem
            alignItems="flex-start"
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.09)',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                }
            }
            }
        >
            <ListItemAvatar>
                <Tooltip title="Open in CoinMarketCap">
                    <Avatar alt={symbol} src={icon} onClick={handleOpenLink} sx={{ cursor: 'pointer' }} />
                </Tooltip>
            </ListItemAvatar>
            <ListItemText
                disableTypography
                primary={symbol}
                secondary={
                    <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                        <Grid item xs={5}>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2" color="text.secondary" >
                                {fCurrency(usd_price || 0)}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2" color="text.secondary" >
                                {fCurrencyCap(market_cap_usd || 0, true)}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="body2" color="text.secondary">
                                {rank}
                            </Typography>
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
}

type CurrencyListProps = {
    coins: Coin[],
}

export function CurrencyList({ coins = [] }: CurrencyListProps) {

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {coins.map(coin => (
                <CurrencyItem coin={coin} key={coin.id} />
            ))}
        </List>
    );
}

export default function CoinModalSelector({ value, placeholder = 'Select a token' }: Props) {


    const [ coins, setCoins ] = useState<Coin[]>([]);
    const [ open, setOpen ] = useState(false);
    const [ , setSelectedCoin ] = useState(null);

    useQuery(GET_COINS, {
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            console.log(data);

            const _coins: Coin[] = data.coins?.map((_c: any) => {

                const _coin: Coin = {
                    id: String(_c.id || ''),
                    name: String(_c.name || ''),
                    symbol: String(_c.symbol || ''),
                    slug: String(_c.slug || ''),
                    rank: Number(_c.rank || Number.MAX_SAFE_INTEGER),
                    icon: String(_c.icon || ''),
                    usd_price: Number(_c.usd_price || 0),
                    market_cap_usd: Number(_c.market_cap_usd || 0),
                    circulating_supply: Number(_c.circulating_supply || 0),
                    total_supply: Number(_c.total_supply || 0),
                    max_supply: Number(_c.max_supply || 0),
                    platform: {
                        id: String(_c.platform?.id || ''),
                        name: String(_c.platform?.name || ''),
                        symbol: String(_c.platform?.symbol || ''),
                        slug: String(_c.platform?.slug || ''),
                        token_address: String(_c.platform?.token_address || ''),
                    }
                };

                return _coin;
            });

            setCoins(_coins);
        },
    });

    const handleClick = () => {

    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    // const handleSelect = (coin: Coin) => {
    //     setOpen(false);
    //     console.log("coin", coin);
    // }

    const handleClear = () => {
        setOpen(false);
        setSelectedCoin(null);
    }

    return (
        <>
            <Chip
                variant="filled"
                sx={{ m: '0.2rem' }}
                label={
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        p: '0.5rem',
                    }} >
                        <Avatar
                            alt={value || "Token"}
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Typography component="p" sx={{ fontFamily: 'Inter custom', fontWeight: 600, }} >
                            {value || placeholder}
                        </Typography>
                    </Box>
                }
                onClick={handleOpen}
                onDelete={handleClick}
                deleteIcon={<ArrowDropDownIcon />}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h6" sx={{ fontFamily: 'Inter custom', fontWeight: 600, }} >
                                Select a token
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={handleClear}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        margin="dense"
                        id="name"
                        label="Search by name or symbol"
                        type="search"
                        variant="outlined"
                        autoComplete="off"
                        sx={{ pb: '1rem' }}
                    />
                    <Divider />
                    <div id="currency=list" style={{ maxHeight: 400, overflow: 'auto' }}>
                        <CurrencyList coins={coins} />
                    </div>
                    <Divider />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Manage</Button>
                </DialogActions>
            </Dialog>
        </>
    );

    // return (
    //     <Paper
    //         component="div"
    //         sx={{
    //             borderRadius: '1rem',
    //             display: 'flex',
    //             alignItems: 'center',
    //             gap: '0.5rem',
    //         }}
    //     >
    //         <Avatar
    //             alt={value || "Token"}
    //             src="/static/images/avatar/1.jpg"
    //             sx={{ width: 24, height: 24 }}
    //         />
    //         <Typography component="p" sx={{ fontFamily: 'Inter custom', fontWeight: 600, }} >
    //             {value || placeholder}
    //         </Typography>
    //         <ArrowDropDownIcon />
    //     </Paper>
    // );
}