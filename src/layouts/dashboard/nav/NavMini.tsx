import { Stack, Box } from '@mui/material';

import Logo from 'src/components/logo';
import { hideScrollbarX } from 'src/utils/cssStyles';
import { NavSectionMini } from 'src/components/nav-section';
import { NAV } from 'src/config-global';

import navConfig from 'src/routes/config-navigation';
import NavToggleButton from './NavToggleButton';

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 64,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />
      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          pt: NAV.H_DASHBOARD,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Logo sx={{ mx: 'auto', my: 2 }} />
        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
