/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import Blockies from 'react-blockies';

import { bgBlur } from 'src/utils/cssStyles';
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';

import { HEADER, NAV } from 'src/config-global';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/contexts/SettingsContext';
import SvgColor from 'src/components/svg-color';

import LanguagePopover from './LanguagePopover';

type Props = {
    onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
    const theme = useTheme();

    const { themeLayout, themeMode, onToggleMode } = useSettingsContext();
    const isNavHorizontal = themeLayout === 'horizontal';
    const isNavMini = themeLayout === 'mini';
    const isDesktop = useResponsive('up', 'lg');
    const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

    const [ fullscreen, setFullscreen ] = useState(false);

    const onToggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const renderContent = (
        <>
            {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

            {!isDesktop && (
                <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>
            )}

            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent={{ sm: 'space-around', md: 'flex-end' }}
                spacing={{ xs: 0.5, sm: 1.5 }}
            >

                <LanguagePopover />
                <Stack direction="row">
                    <IconButton
                        onClick={onToggleMode}
                        style={{
                            cursor: 'pointer',
                            color: themeMode === 'light' ? theme.palette.primary.main : theme.palette.warning.main,
                        }}
                    >
                        <SvgColor src={`/assets/icons/setting/${themeMode === 'light' ? 'ic_sun' : 'ic_moon'}.svg`} />
                    </IconButton>
                </Stack>
                <Stack direction="row">
                    <IconButton
                        style={{
                            cursor: 'pointer',
                            color: theme.palette.text.secondary
                        }}
                        onClick={onToggleFullScreen}
                    >

                        <SvgColor
                            src={`/assets/icons/setting/${fullscreen ? 'ic_exit_full_screen' : 'ic_full_screen'}.svg`}
                        />
                    </IconButton>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction="row">
                    <Box paddingRight={2} sx={{ ml: 2, minWidth: 0, }}>
                        <Typography variant="subtitle2" noWrap align="right" sx={{ color: 'text.primary' }}>
                            Crypto Billionaire
                        </Typography>
                        <Typography variant="body2" noWrap align="right" sx={{ color: 'text.secondary' }} >
                            Admin
                        </Typography>
                    </Box>
                    <Blockies
                        seed={'CryptoBillionaire'.toLowerCase()}
                        scale={5}
                        size={8}
                        className="rounded-full"
                    />
                </Stack>
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create([ 'height' ], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(isDesktop && {
                    width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
                    height: HEADER.H_DASHBOARD_DESKTOP,
                    ...(isOffset && {
                        height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
                    }),
                    ...(isNavHorizontal && {
                        width: 1,
                        bgcolor: 'background.default',
                        height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
                        borderBottom: `dashed 1px ${theme.palette.divider}`,
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
                    }),
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 },
                    py: HEADER.H_TOPBAR,
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}
