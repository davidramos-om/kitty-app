import { useState } from 'react';
import { MenuItem, Stack } from '@mui/material';

import Image from 'src/components/Image';
import MenuPopover from 'src/layouts/MenuPopover';
import IconButtonAnimate from 'src/components/IconButtonAnimate';
import useSettings from "src/hooks/useSettings";


const LANGS = [
  {
    label: 'English',
    value: 'en',
    icon: '/images/ic_flag_en.svg',
  },
  {
    label: 'German',
    value: 'de',
    icon: '/images/ic_flag_de.svg',
  },
  {
    label: 'French',
    value: 'fr',
    icon: '/images/ic_flag_fr.svg',
  },
];


export default function LanguagePopover() {

  const { language, onChangeLanguage } = useSettings();
  const [ open, setOpen ] = useState<HTMLElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (language: string) => () => {
    handleClose();
    onChangeLanguage(language);
  };

  const lang = LANGS.find((item) => item.value === language) || LANGS[ 0 ];

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && { bgcolor: 'action.selected' }),
        }}
      >
        <Image disabledEffect src={lang.icon} alt={lang.label} />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[ 0 ].value}
              onClick={handleChangeLang(option.value)}
            >
              <Image
                disabledEffect
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
