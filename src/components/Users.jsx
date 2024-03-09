import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(Owner_name, Building_ID, Payment_Status, Date_of_Issuance, Amount_Paid,) {
  return {
    name: Owner_name,
    Building_ID: Building_ID,
    Payment_Status: Payment_Status,
    Date_of_Issuance: Date_of_Issuance,
    Amount_Paid: Amount_Paid,

    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  return (

      <React.Fragment>
        <TableRow sx={{borderBottom: 'unset'}}>
          <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" sx={{fontSize: "1rem"}}>
            {row.other_names} {row.surname}
          </TableCell>
          <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>{row.id}</TableCell>
          <TableCell align="right"
                     sx={{fontSize: "1rem", textAlign: "left"}}>{row.tax_identification_number}</TableCell>
          <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>{row.address}</TableCell>
          <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>{row.phone_number}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{margin: 1}}>
                <Typography variant="h6" gutterBottom component="div">
                  Buildings
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontSize: "1rem", textAlign: "left"}}>ID</TableCell>
                      <TableCell sx={{fontSize: "1rem", textAlign: "left"}}>Payment Amount Due</TableCell>
                      <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>Current Impost</TableCell>
                      <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>Address</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.buildings.map((historyRow) => (
                        <TableRow key={historyRow.id}>
                          <TableCell component="th" scope="row" sx={{fontSize: "1rem"}}>
                            {historyRow.id}
                          </TableCell>
                          <TableCell
                              sx={{fontSize: "1rem", textAlign: "left"}}>{historyRow.payment_amount_due}</TableCell>
                          <TableCell align="right"
                                     sx={{fontSize: "1rem", textAlign: "left"}}>{historyRow.current_impost}</TableCell>
                          <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>
                            {historyRow.physical_address}
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box sx={{margin: 1}}>
                <Typography variant="h6" gutterBottom component="div">
                  Businesses
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontSize: "1rem", textAlign: "left"}}>ID</TableCell>
                      <TableCell sx={{fontSize: "1rem", textAlign: "left"}}>Name</TableCell>
                      <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>TIN</TableCell>
                      <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>DA Assigned Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.businesses.map((historyRow) => (
                        <TableRow key={historyRow.id}>
                          <TableCell component="th" scope="row" sx={{fontSize: "1rem"}}>
                            {historyRow.id}
                          </TableCell>
                          <TableCell sx={{fontSize: "1rem", textAlign: "left"}}>{historyRow.name}</TableCell>
                          <TableCell align="right" sx={{
                            fontSize: "1rem",
                            textAlign: "left"
                          }}>{historyRow.tax_identification_number}</TableCell>
                          <TableCell align="right" sx={{fontSize: "1rem", textAlign: "left"}}>
                            {historyRow.da_assigned_number}
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData('Mr. Opoku Faraday', 159, 'Paid', 24, 4.0, 3.99),
  createData('Mary Erinch', 237, 'Not Paid', 98, 4.3, 4.99),
  createData('Eclair Jane', 262, "Paid", 98, 6.0, 3.79),
  createData('Faustina Jireh', 305, 'Not Paid', 67, 4.3, 2.5),
  createData('Gossiplina', 356, 'Paid', 84, 3.9, 1.5),
];

export default function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
        async (e) => {
          if (e.ok) {
            const response = await e.json();
            console.log(response)
            console.log("response")
            setUsersData(response)
            // console.log(usersData)
            return;
          }
          console.log("An error occurred");
        }
    )
  }, []);
  return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell sx={{fontSize: "1rem", fontWeight: "bolder", textAlign: "left"}}>Name</TableCell>
              <TableCell align="right" sx={{fontSize: "1rem", fontWeight: "bolder", textAlign: "left"}}>ID</TableCell>
              <TableCell align="right" sx={{fontSize: "1rem", fontWeight: "bolder", textAlign: "left"}}>TIN</TableCell>
              <TableCell align="right"
                         sx={{fontSize: "1rem", fontWeight: "bolder", textAlign: "left"}}>Address</TableCell>
              <TableCell align="right" sx={{fontSize: "1rem", fontWeight: "bolder", textAlign: "left"}}>Phone
                Number</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/*{rows.map((row) => (*/}
            {/*  <Row key={row.name} row={row} />*/}
            {/*))}*/}
            {usersData.map((row) => (
                <Row key={row.id} row={row}/>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
  );
}
