import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import CoinModalSelector from 'src/components/selectors/CoinModalSelector';

type Props = {
    placeholder?: string,
}

export default function CoinField({ placeholder = 'Select a token' }: Props) {

    return (
        <Paper
            component="form"
            sx={{ p: '1.5rem', display: 'flex', alignItems: 'center', width: 400, borderRadius: '1rem' }}
        >
            <InputBase
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'Token amount' }}
                value={"0.0"}
                type='number'
                sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: '1.5rem',
                    fontFamily: 'Inter custom'
                }}
            />
            <CoinModalSelector value='ETH' />
        </Paper>
    );
}
