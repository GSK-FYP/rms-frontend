import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Switch, FormControlLabel, IconButton, List, ListItem, ListItemIcon, ListItemText,ListItemButton, Box, Typography, useTheme } from '@mui/material';
import { Brightness4 as Brightness4Icon, Edit as EditIcon, QuestionAnswer as QuestionAnswerIcon, LightModeOutlined as LightModeOutlinedIcon, DarkModeOutlined as DarkModeOutlinedIcon } from '@mui/icons-material';
import Notification from './Notification';
import { GlobalContext, tokens } from "../theme";

const Settings = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const colorMode = useContext(GlobalContext); // Use the useContext hook to access the context

  const handleThemeToggle = () => {
    colorMode.toggleColorMode(); // Call the toggleColorMode function to change the theme mode
  };

  const isDarkMode = theme.palette.mode === 'dark';
  const themeLabel = isDarkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <Typography variant='h3' align='center' sx={{ marginTop:"1px" }}>
      Settings
      <Box
        sx={{
          marginLeft: "150px",
          marginRight: "50px",
          marginTop: "60px",
          boxShadow: isDarkMode ? '0 0 10px white' : '0 0 10px black', // White shadow for dark mode, black shadow for light mode
          p: 2,
          borderRadius: "20px",
          width: "75%",
          height:"350px",
          bgcolor: isDarkMode ? '#333' : 'white', // Dark gray background for dark mode, white background for light mode
        }}
      >
        <List>
          {/* Theme Toggle */}
          <ListItem>
            <ListItemIcon>
               <Brightness4Icon /> 
            </ListItemIcon>
            <ListItemText primary="Theme"
            primaryTypographyProps={{ variant: "h6", style: { fontSize: "20px" } }}
            />
            <FormControlLabel
              control={<Switch checked={isDarkMode} onChange={handleThemeToggle} />} // Set the checked property based on the theme mode
              label={themeLabel} 
              sx={{
                marginRight: "150px",
                '& .MuiSwitch-thumb': {
                  bgcolor: isDarkMode ? 'white' : 'gray', // Set the color of the thumb (toggleButton)
                },
                '& .MuiSwitch-track': {
                  bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', // Set the color of the track (background)
                },
              }}
            />
          </ListItem>

          {/* Edit Profile */}
          <Link to="/profilepage" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Profile"
                primaryTypographyProps={{ variant: "h6", style: { fontSize: "20px" } }}/>
            </ListItemButton>
          </Link>

          <ListItemButton sx={{ marginLeft: "-12px", textDecoration: 'none', color: 'inherit' }}>
            <ListItemIcon>
              <Notification />
            </ListItemIcon>
            <ListItemText
              primary="Notification"
              sx={{ marginLeft: "10px"}}
            primaryTypographyProps={{ variant: "h6", style: { fontSize: "20px" } }}
            />
          </ListItemButton>

          {/* </Link> */}

          {/* FAQ */}
          <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ"
              primaryTypographyProps={{ variant: "h6", style: { fontSize: "20px" } }}
              />
            </ListItemButton>
          </Link>
        </List>
      </Box>
    </Typography>
  );
};

export default Settings;
