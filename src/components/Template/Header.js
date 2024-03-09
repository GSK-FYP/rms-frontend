import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const TextTemplator = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="normal"
        sx={{ m: "0 0 5px 0" ,fontWeight:"bold"}}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default TextTemplator;
