import NextLink from 'next/link';
import { Box, BoxProps } from '@mui/material';

import Image from "src/components/image";

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <Image
        src="/favicon.png"
        alt="Logo"
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
}
