import {useState} from "react";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {BusinessCenter, PeopleAlt} from "@mui/icons-material";


const Item = ({ title, to, icon, selected, setSelected, dotColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      style={{
        color: colors ? 'grey[200]' : 'grey[700]',
      }}
      icon={icon}
    >
      {title}
      <Link to={to} />
    </MenuItem>
  );
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`,
        },
        "& .pro-sidebar-width": {
          width: "10px !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "3px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="1rem"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box isCollapsed={!isCollapsed} variants={variants}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              ></Box>
              <Box textAlign="center">
                <Typography
                  color={colors.grey[400]}
                  fontStyle="-moz-initial"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ASOKWA DISTRICT
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Position
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            variants={variants}
            animate={isCollapsed ? undefined : "1%"}
            paddingLeft={isCollapsed ? undefined : "1%"}
          >
            {/*<Item*/}
            {/*  title="Home"*/}
            {/*  icon={<HomeOutlinedIcon />}*/}
            {/*  to="/"*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}

            <Item
              title="Maps"
              to="/Map"
              icon={<ExploreIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Fees&Fines"
              to="/FEES"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {/*<Item*/}
            {/*  title="Business"*/}
            {/*  to="/Business"*/}
            {/*  icon={<BusinessCenter/>}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}

            {/*<Item*/}
            {/*  title="Buildings"*/}
            {/*  to="/Buildings"*/}
            {/*  icon={<ApartmentIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            <Item
                title="Users"
                to="/Users"
                icon={<PeopleAlt/>}
              selected={selected}
              setSelected={setSelected}
            />

              {/*<Item*/}
              {/*  title="Calendar"*/}
              {/*  to="/Calendar"*/}
              {/*  dotColor={colors.redAccent[500]}*/}
              {/*  icon={<CalendarTodayOutlinedIcon />}*/}
              {/*  selected={selected}*/}
              {/*  setSelected={setSelected}*/}
              {/*/>*/}

              {/*<Item*/}
              {/*  title="Line Graph"*/}
              {/*  to="/LineGraph"*/}
              {/*  icon={<LineAxisIcon />}*/}
              {/*  selected={selected}*/}
              {/*  setSelected={setSelected}*/}
              {/*/>*/}

              {/*<Item*/}
              {/*  title="Pie Chart"*/}
              {/*  to="/PieChart"*/}
              {/*  icon={<PieChartIcon />}*/}
              {/*  selected={selected}*/}
              {/*  setSelected={setSelected}*/}
              {/*/>*/}
              {/*<Box*/}
              {/*  display="flex"*/}
              {/*  justifyContent="space-around"*/}
              {/*  rowGap="2rem"*/}
              {/*  paddingTop="5rem"*/}
              {/*  flexDirection="column"*/}
              {/*>*/}
              {/*  <Item*/}
              {/*    title="Settings"*/}
              {/*    to="/Settings"*/}
              {/*    icon={<SettingsOutlinedIcon />}*/}
              {/*    selected={selected}*/}
              {/*    setSelected={setSelected}*/}
              {/*  />*/}

              {/*  <Item*/}
              {/*    title="Logout"*/}
              {/*    to="/LogOut"*/}
              {/*    icon={<LogoutOutlinedIcon />}*/}
              {/*    selected={selected}*/}
              {/*    setSelected={setSelected}*/}
              {/*  />*/}
              {/*</Box>*/}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;
