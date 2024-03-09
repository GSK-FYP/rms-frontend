// // import * as React from 'react'
// // import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../DummyData/mockData";
// import TextTemplator from "../../components/Template/Header";
// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// // import { useState } from "react";

// import * as React from "react";
// // import { SwipeableViews } from "react-swipeable-views";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import "../../index.css";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// export default function Fees() {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   const columns = [
//     { field: "id", headerName: "ID" },

//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "cost",
//       headerName: "Cost",
//       flex: 1,
//       renderCell: (params) => (
//         <Typography color={colors.greenAccent[500]}>
//           ${params.row.cost}
//         </Typography>
//       ),
//     },
//     {
//       field: "date",
//       headerName: "Date",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box m="20px">
//       <TextTemplator title="INVOICES" subtitle="List of Invoice Balances" />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           bgcolor: "background.paper",
//           width: "100%",
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//             WebkitOverflowScrolling: "-moz-initial",
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <AppBar position="static">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="secondary"
//             textColor="inherit"
//             variant="fullWidth"
//           >
//             <Tab label="Full Payment" {...a11yProps(0)} />
//             <Tab label="Half Payment" {...a11yProps(1)} />
//             <Tab label="Not Paid" {...a11yProps(2)} />
//           </Tabs>
//         </AppBar>

//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           onChangeIndex={handleChangeIndex}
//         >
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             {mockDataInvoices.map((transaction, index) => {
//               return (
//                 <>
//                   <Box
//                     row="4rem"
//                     rowGap="9rem"
//                     key={`${transaction.id}-${index}`}
//                     display="flex"
//                     justifyContent="space-between"
//                     alignItems="center"
//                     borderBottom={`4px solid ${colors.primary[500]}`}
//                     p="15px"
//                   >
//                     {/* <Box display="flex"> */}
//                     <Box
//                       color={colors.greenAccent[500]}
//                       variant="h5"
//                       fontWeight="bold"
//                       p="5px 10px"
//                     >
//                       {transaction.id}
//                     </Box>
//                     <Box color={colors.grey[100]}>{transaction.name}</Box>
//                     {/* </Box> */}

//                     <Box color={colors.grey[100]}>{transaction.email}</Box>

//                     <Box backgroundColor={colors.greenAccent[500]} p="5px 10px">
//                       ₡{transaction.cost}
//                     </Box>
//                   </Box>
//                 </>
//               );
//             })}

//             <DataGrid
//               checkboxSelection
//               rows={mockDataInvoices}
//               columns={columns}
//             />
//           </TabPanel>

//           <TabPanel value={value} index={1} dir={theme.direction}>
//             Half Payment
//             <DataGrid
//               checkboxSelection
//               rows={mockDataInvoices}
//               columns={columns}
//             />
//           </TabPanel>
//           <TabPanel value={value} index={2} dir={theme.direction}>
//             Not Paid
//             <DataGrid
//               checkboxSelection
//               rows={mockDataInvoices}
//               columns={columns}
//             />
//           </TabPanel>
//         </SwipeableViews>
//       </Box>
//     </Box>
//   );
// }


const Fees = ()=>(
  <div>
    Fees and FInes Page...........
  </div>
)