import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from '../hooks/use-responsive';



import Iconify from './iconify';


import { NAV, HEADER } from '../utils/config-layout';


// ----------------------------------------------------------------------

export default function Header({ onOpenNav }: { onOpenNav: any }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg', 'xl');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}



      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <Iconify icon="eva:search-fill" />
        </IconButton>
        <IconButton>
          <Iconify icon="eva:heart-fill" />
        </IconButton>
        <IconButton>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        bgcolor: 'background.default',
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};
function onOpenNav(event: React.MouseEvent<HTMLButtonElement>): void {
        throw new Error('Function not implemented.');
}

