import { Box } from "@mui/material";
import TextTemplator from "../../components/Template/Header";
// import PieChart from "../../components/PieChart";
import { PieChart } from "../../components/PieChart";

const Pie = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: "10rem",
          display: "flex",
          paddingLeft: "30rem",
          height: "50vh",
          width: "400vw",
        }}
      >
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
