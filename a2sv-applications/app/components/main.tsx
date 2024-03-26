import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useResponsive } from '../hooks/use-responsive';

import { NAV, HEADER } from '../utils/config-layout';

// Add this import statement

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }: { children: React.ReactNode, sx: object, [key: string]: any }) {
  const lgUp = useResponsive('up', 'lg', 'xl');

  return (
    <Box
   
      component="main"
      sx={{
        overflow: 'auto',
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
