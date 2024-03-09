// import * as React from 'react';
import * as React from "react";
import { Box, Button,  TextField } from "@mui/material";
import { Formik } from "formik";
// import * as yup from "yup";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextTemplator from "../Template/Header";
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Visibility from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";

const LoginAccount = () => {
  const NotBigScreeen = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {event.preventDefault(); };
  return (
    <Box m="20px" alignContent="center">
    <TextTemplator title="Welcome Back!"  subtitle="Please enter your details"/>

    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      
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
          <Box alignItems="center"
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: NotBigScreeen ? undefined : "span 4" },
            }}
          >
           
           
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
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Typography color="turquoise" sx={{cursor:"pointer"}}>
              Forgot Password?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt="20px" color="secondary" variant="contained">
            <Button type="submit" color="secondary" variant="contained">
             LogIn
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box>

  )
};
const initialValues = {
 
  email: "",
  password:"",

};

export default LoginAccount