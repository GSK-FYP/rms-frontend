import { Box } from "@mui/material";
import TextTemplator from "../../components/Template/Header";
import LineChart from "../../components/LineChart";

const LineGraph = () => {
  return (
    <Box
      m="20px 0 0 30px"
      height="auto"
      width="50rem"
      justifyContent="center"
      sx={{ transition: "all ease-out 200ms", alignSelf: "center" }}
    >
      <TextTemplator title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default LineGraph;
