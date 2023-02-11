import { useTheme } from '@mui/material/styles';
import { IconButton, IconButtonProps } from '@mui/material';

import useResponsive from 'src/hooks/useResponsive';
import { bgBlur } from 'src/utils/cssStyles';
import { NAV } from 'src/config-global';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/contexts/SettingsContext';

export default function NavToggleButton({ sx, ...other }: IconButtonProps) {
  
  const theme = useTheme();
  const { themeLayout, onToggleLayout } = useSettingsContext();
  const isDesktop = useResponsive('up', 'lg');

  if (!isDesktop) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={onToggleLayout}
      sx={{
        p: 0.5,
        top: 64,
        position: 'fixed',
        left: NAV.W_DASHBOARD - 12,
        zIndex: theme.zIndex.appBar + 1,
        border: `dashed 1px ${theme.palette.divider}`,
        ...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
        '&:hover': {
          bgcolor: 'background.default',
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={16}
        icon={themeLayout === 'vertical' ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'}
      />
    </IconButton>
  );
}
