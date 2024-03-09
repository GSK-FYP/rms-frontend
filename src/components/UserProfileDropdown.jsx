import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { tokens } from "../theme";
import Avatar from '@mui/material/Avatar';
import { Box, Typography,useMediaQuery,useTheme, MenuItem, MenuList, ClickAwayListener, Paper, Grow, Popper, ListItemIcon } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import LockIcon from '@mui/icons-material/Lock';


import avatar from './Assets/images.jpeg';

const Separator = styled('hr')({
  margin: '8px 0',
  border: 'none',
  borderBottom: '1px solid #e1e4e8', 
  marginLeft: '10px',
  marginRight: '10px',
});

const UserProfileDropdown = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          ref={anchorRef}
          alt="User Profile"
          src={avatar}
          onClick={handleToggle}
          sx={{ width: isSmallScreen ? 40 : 50, height: isSmallScreen ? 40 : 50, cursor: 'pointer' }}
        />
        <ArrowDropDownIcon onClick={handleToggle} sx={{ cursor: 'pointer' }} />
      </Box>
      
      <Popper sx={{ minWidth: 260, width: 'max-content', zIndex: 1000 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper sx={{ marginTop: '-47px', borderRadius: '12px 0px 0px 12px'}}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      alt="User Profile"
                      src={avatar}
                      style={{ marginLeft: '10px' }}
                    />
                    <div style={{ marginLeft: '20px', marginTop: '8px' }}>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '-2px' }}>
                        Asokwa District
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Manager
                      </Typography>
                    </div>
                  </div>
                  <Separator />
                  <MenuItem component={Link} to="/ProfilePage" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }} sx={{ fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/Settings" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }} sx={{ fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem component={Link} to="/LogOut" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }} sx={{ fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  <MenuItem component={Link} to="/ProfilePage" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }} sx={{ fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/Settings" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem component={Link} to="/LogOut" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  <MenuItem component={Link} to="/Settings" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem component={Link} to="/Privacy" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    Privacy
                  </MenuItem>
                  <MenuItem component={Link} to="/Settings" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem component={Link} to="/Faq" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "lighter", fontSize: "13px" }}>
                    <ListItemIcon>
                     <HelpIcon />
                    </ListItemIcon>
                    F A Q
                  </MenuItem>
                  <MenuItem component={Link} to="/LogOut" onClick={handleClose} style={{ marginTop: '8px', fontWeight: "400", fontSize: "16px", fontFamily: 'Arial, sans-serif' }}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Box sx={{ position: 'absolute', top: '100%', left: 0, right: 0 }}>
        
      </Box>
    </Box>
  );
};

export default UserProfileDropdown;
