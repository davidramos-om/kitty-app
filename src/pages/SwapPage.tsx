import { Container, Box, Stack } from '@mui/material';
import useSettings from '../hooks/useSettings';
import Page from 'src/components/Page';
import CustomInput from 'src/components/input/CustomInput';
import CoinField from 'src/components/input/CoinField';

export default function SwapPage() {

  const { themeStretch } = useSettings();

  return (
    <Page title="Swap Interface">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box
          sx={{
            // width: 300,
            // mx: 'auto',
            // mx: "auto",
            // width: 200,
            m: 2,
            p: 2,
            // backgroundColor: 'primary.dark',
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            // border: '1px dashed grey',
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [ 0.9, 0.8, 0.7 ],
            // },
          }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <CustomInput />
              <CoinField />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Page>
  );
}
