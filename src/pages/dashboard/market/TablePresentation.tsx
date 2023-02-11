'use client';

import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import { Stack, Box, Typography, Table, TableRow, TableBody, TableCell, TableHead, TableContainer, Avatar, Paper, TableSortLabel, TablePagination, FormControlLabel, Switch } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';
import { fCurrency, fNumber } from "src/utils/formatNumber";

import { getComparator, Order, stableSort } from "src/utils/sort";
import CirculatingSupply from "./CirculatingSupply";
import ChartSparkLine from "./ChartSparkLine";

type TableColumnProps = {
    cellId: string;
    type: 'number' | 'string' | 'currency' | 'chart';
    align?: 'left' | 'right';
    orderBy?: string;
    sortDirection: 'asc' | 'desc' | false;
    onRequestSort?: (event: React.MouseEvent<unknown>, property: string) => void;
    children: React.ReactNode;
}

function TableColumn({ cellId, type, sortDirection, align, orderBy, onRequestSort, children }: TableColumnProps) {

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort?.(event, property);
    };

    return (
        <TableCell
            align={align}
            itemType={type}
            sortDirection={orderBy === cellId ? sortDirection : false}
        >
            {sortDirection === false ?
                children :
                <TableSortLabel
                    active={orderBy === cellId}
                    direction={orderBy === cellId ? sortDirection : 'asc'}
                    onClick={createSortHandler(cellId)}
                >
                    {children}
                    {orderBy === cellId ? (
                        <Box component="span" sx={visuallyHidden}>
                            {sortDirection === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                </TableSortLabel>
            }
        </TableCell>
    );
}

type TablePresentationProps = {
    data: any[];
}

export default function TablePresentation({ data }: TablePresentationProps) {

    const theme = useTheme();
    const [ order, setOrder ] = useState<Order>('asc');
    const [ orderBy, setOrderBy ] = useState<string>('cmc_rank');
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
    const [ rows, setRows ] = useState<any[]>([]);
    const [ dense, setDense ] = useState(false);

    useEffect(() => {
        if(data?.length > 0)
            setRows(data);
        else
            setRows([]);
        
    }, [ data ]);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string,) => {

        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const renderData = rows?.length > 0 ?  stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : [];

    return (
        <div>
            <Scrollbar>
                <Box sx={{ width: '100%' }} p={2}>
                    <Stack direction="row">
                        <FormControlLabel
                            control={<Switch checked={dense} onChange={handleChangeDense} />}
                            label="Dense"
                        />
                    </Stack>
                    <TableContainer sx={{ minWidth: 320 }} component={Paper}>
                        <Table size={dense ? 'small' : 'medium'}>
                            <TableHead>
                                <TableRow>
                                    <TableColumn
                                        cellId="cmc_rank"
                                        sortDirection="asc"
                                        type="number"
                                        align="left"
                                        onRequestSort={handleRequestSort}
                                    >#
                                    </TableColumn>
                                    <TableColumn
                                        cellId="name"
                                        sortDirection="asc"
                                        type="string"
                                        align="left"
                                        onRequestSort={handleRequestSort}
                                    >
                                        Name
                                    </TableColumn>
                                    <TableColumn
                                        cellId="usd_price"
                                        sortDirection="asc"
                                        type="number"
                                        align="left"
                                        onRequestSort={handleRequestSort}
                                    >
                                        Price
                                    </TableColumn>
                                    <TableColumn
                                        cellId="market_cap_usd"
                                        sortDirection="asc"
                                        type="number"
                                        align="left"
                                        onRequestSort={handleRequestSort}
                                    >
                                        MarketCap
                                    </TableColumn>
                                    <TableColumn
                                        cellId="circulating_supply"
                                        sortDirection="asc"
                                        type="string"
                                        align="left"
                                        onRequestSort={handleRequestSort}
                                    >
                                        Circulating Supply
                                    </TableColumn>
                                    <TableColumn
                                        cellId="ath"
                                        sortDirection={false}
                                        type="string"
                                        align="left"
                                    >
                                        A.T. Low / High
                                    </TableColumn>
                                    <TableColumn
                                        cellId="last_7_days"
                                        sortDirection={false}
                                        type="string"
                                        align="left"
                                    >
                                        Last 7 Days
                                    </TableColumn>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <br />
                                {renderData.map((row: any) => (
                                    <TableRow hover key={row.id}>
                                        <TableCell>{fNumber(row.cmc_rank || 0)}</TableCell>
                                        <TableCell>
                                            <Stack direction="row" alignItems="center" gap={1}>
                                                <Avatar
                                                    sizes="small"
                                                    variant="circular"
                                                    sx={{ width: 24, height: 24 }}
                                                    src={row.icon} />
                                                <Stack
                                                    direction="row"
                                                    alignItems="baseline"
                                                    gap={0.5}
                                                >
                                                    <Typography component="p" fontWeight="bold">
                                                        {row.name}
                                                    </Typography>
                                                    <Typography
                                                        component="span"
                                                        fontWeight="bold"
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        {row.symbol}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{fCurrency(row.usd_price || 0)}</TableCell>
                                        <TableCell>{fCurrency(row.market_cap_usd || 0)}</TableCell>
                                        <TableCell>
                                            <CirculatingSupply
                                                symbol={String(row.symbol || '')}
                                                circulating={Number(row.circulating_supply || 0)}
                                                totalSupply={Number(row.total_supply || 0)}
                                                maxSupply={Number(row.max_supply || 0)} />

                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row" alignItems="center" gap={1}>
                                                <Label
                                                    color="error"
                                                    variant={theme.palette.mode === 'light' ? 'soft' : 'filled'}
                                                >
                                                    {fCurrency(row.atl || 0)}
                                                </Label>

                                                <Label
                                                    color="success"
                                                    variant={theme.palette.mode === 'light' ? 'soft' : 'filled'}
                                                >
                                                    {fCurrency(row.ath || 0)}
                                                </Label>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            <ChartSparkLine
                                                chartColor={theme.palette.primary.main}
                                                chartData={row.sparkline_in_7d || []} />
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows, }} >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[ 5, 10, 25 ]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Scrollbar>
        </div>
    );
}
