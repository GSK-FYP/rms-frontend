import * as React from 'react'
import {useEffect, useState} from 'react'
import {Box, Checkbox, Container, FormControlLabel, FormGroup} from "@mui/material"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem"
import {useParams} from "react-router-dom";

async function update_building_details(building_id, changes_json) {
    console.log(changes_json)
    console.log("changes")
    console.log(building_id)
    const response = await fetch(`http://127.0.0.1:8000/buildings/${building_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: changes_json,
    })

    if (response.ok) {
        return await response.json()
    }
}

const Entry = () => {
    let {building_id} = useParams();
    const [building_class, setBuildingClass] = React.useState('');
    const [building_category, setBuildingCategory] = React.useState('');
    const [physicalAddress, setPhysicalAddress] = useState('');
    const [streetName, setStreetName] = useState('');
    const [propertyNumber, setPropertyNumber] = useState('');
    const [buildingData, setBuildingData] = useState({});
    const [physicalAddressRequestError, setPhysicalAddressRequestError] = useState({});

    const handleClassChange = (event) => {
        const new_value = event.target.value;
        let json = JSON.stringify({});

        if (new_value === 1) {
            json = JSON.stringify({"class": "1st"})
        } else if (new_value === 2) {
            json = JSON.stringify({"class": "2nd"})
        } else if (new_value === 3) {
            json = JSON.stringify({"class": "3rd"})
        }

        update_building_details(building_id, json).then(
            (e) => {
                if (typeof e.id === "undefined") {
                    return
                }
                setBuildingClass(event.target.value)
            }
        );
    };
    const handleCategoryChange = (event) => {
        const new_value = event.target.value;
        let json = JSON.stringify({});

        if (new_value === 1) {
            json = JSON.stringify({"category": "residential"})
        } else if (new_value === 2) {
            json = JSON.stringify({"category": "commercial"})
        } else if (new_value === 3) {
            json = JSON.stringify({"category": "government"})
        } else if (new_value === 4) {
            json = JSON.stringify({"category": "mining"})
        }

        update_building_details(building_id, json).then(
            (e) => {
                if (typeof e.id === "undefined") {
                    return
                }
                setBuildingCategory(event.target.value)
            }
        );
     };

    const handleLoad = async (event) => {
        console.log(event)
    }

    const handlePhysicalAddressChange = (event) => {
        if (event.code === "Enter") {


            const json = JSON.stringify({"physical_address": event.target.value})
            update_building_details(building_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setPhysicalAddress(event.target.value)
                }
            )
        } else {
            setPhysicalAddress(event.target.key)
        }
    }

    const handleStreetNameChange = (event) => {
        console.log(event);
        if (event.code === "Enter") {
            const json = JSON.stringify({"street_name": event.target.value})
            update_building_details(building_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setStreetName(event.target.value)
                }
            )
        }
        setStreetName(event.target.key)
    }

    const handlePropertyNumberChange = (event) => {
        console.log(event);
        if (event.code === "Enter") {
            const json = JSON.stringify({"property_number": event.target.value})
            update_building_details(building_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setPropertyNumber(event.target.value)
                }
            )
        }
        setPropertyNumber(event.target.key)
    }

    console.log("bee")
    console.log(building_id)


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/buildings/${building_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            async (e) => {
                if (e.ok) {
                    const response = await e.json();
                    if (response.class != null) {
                        if (response.class === "1st") {
                            setBuildingClass("1");
                        } else if (response.class === "2nd") {
                            setBuildingClass("2");
                        } else if (response.class === "3rd") {
                            setBuildingClass("3");
                        }
                    }
                    if (response.category != null) {
                        if (response.category === "residential") {
                            setBuildingCategory("1");
                        } else if (response.category === "commercial") {
                            setBuildingCategory("2");
                        } else if (response.category === "government") {
                            setBuildingCategory("3");
                        } else if (response.category === "mining") {
                            setBuildingCategory("4");
                        }
                    }
                    if (response.physical_address != null) {
                        setPhysicalAddress(response.physical_address);
                    }
                    if (response.street_name != null) {
                        setStreetName(response.street_name);
                    }
                    if (response.property_number != null) {
                        setPropertyNumber(response.property_number);
                    }
                    setBuildingData(response)
                    return;
                }
                console.log("An error occurred");
            }
        )
    }, [])

return(


    <Container sx={{alignContent:"center"}}>

<Box>
    <div style={{
        backgroundColor: "goldenrod",
        textAlign: "center",
        fontWeight: "bolder",
        padding: "1rem 0",
        fontSize: 20
    }}>
        Enter Properties Details for ID <span id="upn">{buildingData.id}</span>
    </div>
</Box>


{/* First Grid */}
<Grid>

<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
     <Box>
         <Typography variant="subtitle1">Class</Typography>
         <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={building_class}
             label="Class"
             onChange={handleClassChange}
             sx={{minWidth: 200}}
         >
             <MenuItem value={1}>First</MenuItem>
             <MenuItem value={2}>Second</MenuItem>
             <MenuItem value={3}>Third</MenuItem>
         </Select>
     </Box>

     <Box>
      <Typography variant="subtitle1">Category</Typography>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={building_category}
          sx={{width: 200}}
          onChange={handleCategoryChange}
        >
          <MenuItem value={1}>Residential</MenuItem>
          <MenuItem value={2}>Commercial</MenuItem>
          <MenuItem value={3}>Government</MenuItem>
          <MenuItem value={4}>Mining</MenuItem>
        </Select>
     </Box>

     <Box>
      <Typography variant="subtitle1">Physical Address</Typography>
         <TextField name="Physical Address" sx={{minWidth: 200}} onKeyDown={handlePhysicalAddressChange}
                    value={physicalAddress}/>
     </Box>
     </Box>
    

    </Grid> 
    
<Typography>Property Information </Typography>
<Divider sx={{color:"rebeccapurple"}}/>

{/* Second Grid */}

<Grid>

<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
     <Box>
      <Typography variant="subtitle1">Unique Parcel Number</Typography>
         <TextField
             variant="filled"
             style={{minWidth: 260}}
             value={buildingData.unique_parcel_number}
             InputProps={{
                 readOnly: true,
             }}
         />
     </Box>

     <Box>
      <Typography variant="subtitle1">Street Name</Typography>
         <TextField name="Physical Address" sx={{minWidth: 250}} onKeyDown={handleStreetNameChange} value={streetName}/>
     </Box>

     <Box>
      <Typography variant="subtitle1">Property Number</Typography>
         <TextField name="Physical Address" sx={{minWidth: 250}} onKeyDown={handlePropertyNumberChange}
                    value={propertyNumber}/>
     </Box>


     <Box>
         <Typography variant="subtitle1">Year of Construction</Typography>
         <TextField
             type="number"
             sx={{minWidth: 200}}
             inputProps={{
                 inputMode: 'numeric',
                 pattern: '[0-9]*'
             }}
             value={buildingData.year_of_construction}
         />
     </Box>

     </Box>
     <Divider sx={{color:"rebeccapurple"}}/>


</Grid>
        <h4>Evaluation</h4>
     <Divider/>

     <Grid>
     <Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
         <Box>
             <Typography variant="subtitle1">Current Value</Typography>
             <TextField
                 type="number"
                 sx={{minWidth: 200}}
                 inputProps={{
                     inputMode: 'numeric',
                     pattern: '[0-9]*'
                 }}
                 value={buildingData.current_value}
             />
         </Box>

     <Box>
         <Typography variant="subtitle1">Current Impost</Typography>
         <TextField
             type="number"
             sx={{minWidth: 200}}
             inputProps={{
                 inputMode: 'numeric',
                 pattern: '[0-9]*'
             }}
             value={buildingData.current_impost}
         />
     </Box>


     <Box>
         <Typography variant="subtitle1">Payment Amount Due</Typography>
         <TextField
             type="number"
             sx={{minWidth: 200}}
             inputProps={{
                 inputMode: 'numeric',
                 pattern: '[0-9]*'
             }}
             value={buildingData.payment_amount_due}
         />
     </Box>

     <Box>
         <Typography variant="subtitle1">Arrears</Typography>
         <TextField
             type="number"
             sx={{minWidth: 200}}
             inputProps={{
                 inputMode: 'numeric',
                 pattern: '[0-9]*'
             }}
             value={buildingData.arrears}
         />
     </Box>

     <Box>
         <Typography variant="subtitle1">Revenue Collected</Typography>
         <TextField
             type="number"
             sx={{minWidth: 200}}
             inputProps={{
                 inputMode: 'numeric',
                 pattern: '[0-9]*'
             }}
             value={buildingData.revenue_collected}
         />
     </Box>

     </Box>
     <Divider sx={{color:"rebeccapurple"}}/>
    
     <Divider/>

</Grid> 



<Grid>
<Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem">
    <Box>
        <FormGroup aria-label="position" row>
            <FormControlLabel
                value="end"
                control={<Checkbox/>}
                label="Excluded from Rating"
                labelPlacement="end"
            />
        </FormGroup>
    </Box>
    <Box>
        <TextField
            id="outlined-multiline-flexible"
            placeholder="Comments"
            sx={{minWidth: 400}}
            multiline
            maxRows={8}
        />
    </Box>


</Box>

</Grid>


</Container>

     
)
}

export default Entry
