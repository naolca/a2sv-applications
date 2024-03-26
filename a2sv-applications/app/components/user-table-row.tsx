import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Iconify from "./iconify";

// ----------------------------------------------------------------------

export default function UserTableRow({
  onClick,
  id,
  name,
  email,
  school,
}: {
  onClick:(e: any, i: any) => void;
  id: any;
  name: any;
  email: any;
  school: any;
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };


  const handleClicked = (e: any, i:any) => {
   if (onClick) onClick(e, i);
  }

  return (
    <>
      <TableRow component="tr" onClick={(e: React.MouseEvent<HTMLTableRowElement>) => handleClicked(e, id)} hover tabIndex={-1} sx={{}}>
        <TableCell component="th" scope="row" padding="normal">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>{school}</TableCell>
      </TableRow>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  email: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  school: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
