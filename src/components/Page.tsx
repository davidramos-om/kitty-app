import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Kitty App v.23.02.08.0250`}</title>
      {meta}
    </Helmet>

    <Box
      ref={ref}
      paddingLeft={6}
      paddingRight={6}
      {...other}
    >
      {children}
    </Box>
  </>
));

export default Page;
