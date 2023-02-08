import Blockies from 'react-blockies';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[ 500_12 ],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

type Props = {
  isCollapse: boolean | undefined;
};

export default function NavbarAccount({ isCollapse }: Props) {
  return (
    <Link underline="none" color="inherit">
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent',
          }),
        }}
      >
        <Blockies
          seed={'CryptoBillionaire'.toLowerCase()}
          scale={5}
          size={8}
          className="rounded-full"
        />

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}
        >
          <Typography variant="subtitle2" noWrap>
            Crypto Billionaire
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            Admin
          </Typography>
        </Box>
      </RootStyle>
    </Link>
  );
}
