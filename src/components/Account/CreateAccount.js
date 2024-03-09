import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as React from 'react';
import * as yup from "yup";
// Forms

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//Forms


import useMediaQuery from "@mui/material/useMediaQuery";
import TextTemplator from "../Template/Header";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Visibility from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';

const CreateAccount = () => {
  const NotBigScreeen = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {event.preventDefault(); };

  return (
    <Box m="20px">
      <TextTemplator title="CREATE NEW ACCOUNT" subtitle="Please enter your details"/>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: NotBigScreeen ? undefined : "span 4" },
              }}
            >
              <TextField

                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AssignmentIndIcon/>

                      
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AssignmentIndIcon/>
                  </InputAdornment>
                ),
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon/>
                  </InputAdornment>
                ),
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactEmergencyOutlinedIcon/>
                  </InputAdornment>
                ),
              }}
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
             <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              sx={{gridColumn:"span 4"}}


           label="Password"
           placeholder='Password'
            id="outlined-adornment-password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
>                 
                 {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
                 <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon/>
                  </InputAdornment>
                ),
              }}
              fullWidth
              sx={{gridColumn:"span 4"}}


           label="Confirm Password"
           placeholder='Confirm Password'
            id="outlined-adornment-password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
>                 
                 {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />

              <TextField
            
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />

{/* <FormControl sx={{ m: 1, minWidth: 120 ,border:"3px solid blue", borderRadius:"0.88rem" , background:"white"}} size="large">
      <InputLabel id="demo-select-small-label">MMDAs</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={value}
        label=""
        onChange={handleChange}
      >
        <MenuItem>MMDA0</MenuItem>
       
      </Select>
    </FormControl> */}
 
              






             
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
//applying validation to input using yup 
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password:"",
  Confirm_Password:"",
  contact: "",
  address1: "",
  address2: "",
};

export default CreateAccount