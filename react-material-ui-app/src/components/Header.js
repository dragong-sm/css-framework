import styled from "@emotion/styled";
import { AcUnit, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToobar>
        {/* 글 => sm 일 때, 보여짐 */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI APP BAR
        </Typography>
        {/* 눈꽃 icon => xs 일 때, 보여짐*/}
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        {/* 검색창 */}
        <Search>
          {/* input 태그 같은 ...*/}
          <InputBase placeholder="search bar" />
        </Search>
        {/* 오른쪽 icon들 */}
        <Icons>
          {/* 종모양 */}
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          {/* 프로필 */}
          <Avatar onClick={() => setOpen(true)} sx={{ bgcolor: "gray" }}>
            SM
          </Avatar>
        </Icons>
      </StyledToobar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
