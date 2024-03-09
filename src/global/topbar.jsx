import { Box, IconButton, useTheme } from "@mui/material";
import { GlobalContext, tokens } from "../theme";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../components/Assets/images.jpeg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import avatarLogo from "../components/Assets/logo.png";

import UserProfileDropdown from "../components/UserProfileDropdown";
import Notification from "../components/Notification";
import EmailComponent from "../components/EmailComponent";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(GlobalContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <div>
        <img
          src={avatarLogo}
          alt="Logo"
          style={{ width: "3rem", height: "3rem", borderRadius: "2.1rem" }}
        />
        <span
          onClick={() => {}}
          style={{
            color: colors.redAccent[500],
            fontStretch: "condensed",
            fontFamily: "-moz-initial",
            cursor: "pointer",
          }}
        >
          R.M.S
        </span>
      </div>
      {/* ICONS */}
      <Box display="flex" sx={{ gap: "1.89rem" }}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3rem"
          height="9vh"
          borderTop="5rem"
          flexBasis="inline"
          // zIndex="999"
        >
          <InputBase
            sx={{ ml: 2, flex: 1, cursor: "pointer" }}
            placeholder="Search"
            onClick={() => {}}
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge>
            <EmailComponent/>
          </Badge>
        </IconButton>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge>
            <Notification/>
          </Badge>
        </IconButton>

        <Box>
          {/* <img
            src={avatar}
            alt="User Profile"
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "5rem",
              cursor: "pointer",
            }}
            onClick={() => {}}
          /> */}
          <IconButton>
            <UserProfileDropdown />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;



