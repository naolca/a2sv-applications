import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";




/* import image from next/image */
import Image from "next/image";

import { NAV } from "../utils/config-layout";
import { useLocation } from "react-router-dom";
import { SvgIcon } from "@mui/material";

// ----------------------------------------------------------------------

export default function Nav({
  openNav,
  onCloseNav,
}: {
  openNav: any;
  onCloseNav: any;
}) {
  const [active, setActive] = useState("home");

  const onclick = (currActive: any) => {
    setActive(currActive);
    console.log(active);
  };

  const renderAccount = (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      width={"100%"}
      top={0}
    >
      <Image src="/a2sv.png" alt="logo" width={100} height={100} />
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      <NavItem
        item={{
          path: "/admin-dashboard/home",
          icon: <HomeIcon />,
          title: "home",
          active: active,
        }}
      />
      <NavItem
        item={{
          path: "/admin-dashboard/inperson",
          icon: <PersonIcon />,
          title: "Inperson",
          active: active,
        }}
      />
      <NavItem
        item={{
          path: "/admin-dashboard/remote",
          icon: <LanguageIcon />,
          title: "Remote",
          active: active,
        }}
      />
      <NavItem
        item={{
          path: "/admin-dashboard/edit",
          icon: <EditIcon />,
          title: "Edit Forms",
          active: active,
        }}
      />
    </Stack>
  );

  const renderContent = (
    <Box sx={{ mt: 10 }}>
      {renderAccount}
      {renderMenu}
    </Box>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      <Box
        sx={{
          height: 1,
          position: "fixed",
          width: NAV.WIDTH,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {renderContent}
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }: { item: any }) {
  const location = useLocation();

  const active = location.pathname == item.path;

  return (
    <ListItemButton
      selected={active}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
