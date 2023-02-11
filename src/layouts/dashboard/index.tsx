import { useState } from 'react';
import { Box } from '@mui/material';

import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/contexts/SettingsContext';
import CryptoMarquee from "src/components/CryptoMarqee";

import Main from './Main';
import Header from './header';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';

type Props = {
    children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {

    const { themeLayout } = useSettingsContext();
    const isDesktop = useResponsive('up', 'lg');
    const [ open, setOpen ] = useState(false);
    const isNavMini = themeLayout === 'mini';

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

    const renderContent = () => {

        if (isNavMini) {
            return (
                <>
                    <Header onOpenNav={handleOpen} />
                    <Box
                        sx={{
                            display: { lg: 'flex' },
                            minHeight: { lg: 1 },
                        }}
                    >
                        {isDesktop ? <NavMini /> : renderNavVertical}
                        <Main>{children}</Main>
                    </Box>
                </>
            );
        }

        return (
            <>
                <Header onOpenNav={handleOpen} />
                <Box
                    sx={{
                        display: { lg: 'flex' },
                        minHeight: { lg: 1 },
                    }}
                >
                    <br />
                    {renderNavVertical}
                    <Main>{children}</Main>
                </Box>
            </>
        );
    };

    return <>
        <CryptoMarquee />
        {renderContent()}
    </>;
}
