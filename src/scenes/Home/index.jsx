import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../DummyData/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import TextTemplator from "../../components/Template/Header";
// import { LineChart } from "../../components/LineChart";
import LineChart from "../../components/LineChart";
// import MapDomain from "../../components/GeographyChart";
import { BarChart } from "../../components/BarChart";
// import Pie from "../../scenes/Pie/index";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { PieChart } from "../../components/PieChart";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="30px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TextTemplator
          title="REVENUE MOBILISATION "
          // subtitle="Take Advantage of the space"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: "white",
              color: "green",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px", borderRadius: "5px" }} />
            Download
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoRows="180px"
        gap="20px"
        sx={{ borderRadius: "0.9rem" }}
      >
        {/* ROW 1 */}

        <Box
          // gridColumn="span 3"
          className="my-div"
          gridColumn="span 5"
          backgroundColor={colors.greenAccent[600]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="1.4rem"
        >
          <StatBox
            title="Sum Net Revenue"
            subtitle="₡109,846"
            progress="0.88"
            increase="+14%"
            Probability="+/-92"
          />
        </Box>

        <Box
          className="my-div"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          // backgroundColor={colors.greenAccent[600]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="1.4rem"
        >
          <StatBox
            title="Total Profit"
            subtitle="₡431,225"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          className="my-div"
          gridColumn="span 4"
          // gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          backgroundColor="cornflowerBlue"
          p="30px"
          borderRadius="1.4rem"
          borderColor={` 1.5rem solid ${colors.redAccent[500]}`}
          // borderColor="1.5px solid red"
          boxShadow="-moz-initial"
        >
          <aside
            variant="h4"
            style={{ fontWeight: "bold", fontStyle: "initial" }}
          >
            Overall Money Generated
          </aside>

          <ProgressCircle size="125" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            justifyContent="center"
          ></Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.greenAccent[600]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="1.4rem"
          className="my-div"
        >
          <StatBox
            title="₡7,325,000"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+93%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          className="my-div"
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            sx={{ borderRadius: "4rem 4rem 4rem 4rem" }}
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                ₡23,453
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="200px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              rowGap="9rem"
              key={`${transaction.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="bold"
                  sx={{ borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                // borderRadius="4px"
                sx={{ borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              >
                ₡{transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/*  */}
        <Box
          gridColumn="span 15"
          gridRow="span 3"
          backgroundColor="cornflowerBlue"
          padding="20px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "-45px" }}
          >
            Pie CHARTS
          </Typography>
          <Box display="flex" alignContent="center" justifyContent="center" borderRadius='2rem'>
            <PieChart
              isDashboard={true}
              style={{ height: "20vh !important" , marginTop:"2rem"}}
            />
          </Box>
        </Box>

        <Box
          gridColumn="span 15"
          gridRow="span 2"
          backgroundColor="cornflowerBlue"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="200vh" mt="-20px" width="60vw" alignContent="center" display="flex" justifyContent="center" right="4rem">
            <BarChart isDashboard={true} />
          </Box>
          
        </Box>
        
      </Box>
    </Box>
  );
};

export default Home;
