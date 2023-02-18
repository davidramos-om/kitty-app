import { forwardRef, ReactNode } from 'react';
import Head from 'next/head';
import { Box, BoxProps, Container, ContainerProps } from '@mui/material';

import DashboardLayout from 'src/layouts/dashboard'
import CompactLayout from 'src/layouts/compact'

import { useSettingsContext } from 'src/contexts/SettingsContext';

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  containerSx?: ContainerProps;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, containerSx, ...other }, ref) => {

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title>{`${title} | Kitty App v.23.02.18.0030`}</title>
        {meta}
      </Head>

      <Container
        {...containerSx}
        sx={{
          ...containerSx?.sx,
        }}
        maxWidth={themeStretch ? false : 'xl'}
      >
        <Box
          ref={ref}
          {...other}
        >
          {children}
        </Box>
      </Container>
    </>
  )
});

export default Page;
export { DashboardLayout, CompactLayout };
