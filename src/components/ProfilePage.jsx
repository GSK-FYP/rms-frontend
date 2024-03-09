import React, { useState, useRef } from 'react';
import {
  Avatar,
  Grid,
  Typography,
  useMediaQuery,
  Paper,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import avatar from './Assets/images.jpeg';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const ProfilePage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const user = {
    firstName: 'Max',
    lastName: 'Shodan',
    position: 'Manager',
    email: 'max12345@example.com',
    phoneNumber: '+233 558888892',
    bio: 'Team Manager',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform save action with the editedUser data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const fileInputRef = useRef(null);
  const handleChangePhoto = () => {
    fileInputRef.current.click();
  }

  return (
    <Grid container spacing={4} marginLeft={15}>
      {/* My Profile */}
      <Grid item xs={12}>
        <Typography variant="h5" marginBottom={1} marginTop={1} sx={{ fontWeight: 'bold' }} color="secondary">
          My Profile
        </Typography>
      </Grid>
      <Grid item xs={12} container alignItems="center" spacing={1}>
        <Grid item>
          <Avatar
            alt="User Profile"
            src={avatar}
            style={{ marginLeft: '10px' }}
            sx={{ width: isSmallScreen ? 40 : 70, height: isSmallScreen ? 40 : 70 }}
          />
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 15 }}>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography variant="subtitle1">{user.position}</Typography>
        </Grid>

          
        <Grid item xs={1}>
           {isEditing && (
            <>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginLeft: '-430px', marginTop: '15px' }}
                startIcon={<AddAPhotoIcon />}
                onClick={handleChangePhoto}
              >
                Change Photo
              </Button>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={(e) => {
                  // Handle file selection here
                  const selectedFile = e.target.files[0];
                  console.log(selectedFile); // You can access the selected file here
                }}
              />
            </>
          )}
        </Grid>

        <Grid item xs={2}>
          {isEditing ? (
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: '12px', marginLeft: '10px' }}
              onClick={handleSaveClick}
            >
              <IconButton onClick={handleSaveClick} size="small">
                <SaveIcon />
              </IconButton>
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: '12px', marginLeft: '10px' }}
              onClick={handleEditClick}
            >
              <IconButton onClick={handleEditClick} size="small">
                <EditIcon />
              </IconButton>
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
             
      {/* Personal Information */}
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} color="secondary">
          Personal Information
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">First Name</Typography>
          {isEditing ? (
            <TextField
              name="firstName"
              value={editedUser.firstName}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>
              {user.firstName}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Last Name</Typography>
          {isEditing ? (
            <TextField
              name="lastName"
              value={editedUser.lastName}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>
              {user.lastName}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Email Address</Typography>
          {isEditing ? (
            <TextField
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>
              {user.email}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Phone Number</Typography>
          {isEditing ? (
            <TextField
              name="phoneNumber"
              value={editedUser.phoneNumber}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>
              {user.phoneNumber}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Bio</Typography>
          {isEditing ? (
            <TextField
              name="bio"
              value={editedUser.bio}
              onChange={handleInputChange}
              fullWidth
            />
          ) : (
            <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>
              {user.bio}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;

