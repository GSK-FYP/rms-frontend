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

async function update_business_details(business_id, changes_json) {
    console.log(changes_json)
    console.log("changes")
    console.log(business_id)
    const response = await fetch(`http://127.0.0.1:8000/businesses/${business_id}`, {
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

const BusinessEntry = () => {
    let {business_id} = useParams();
    const [businessClass, setBusinessClass] = React.useState('');
    const [businessCategory, setBusinessCategory] = React.useState('');
    const [businessName, setBusinessName] = useState('');
    const [TIN, setTIN] = useState('');
    const [DAAssignedNumber, setDAAssignedNumber] = useState('');
    const [businessData, setBusinessData] = useState({});
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

        update_business_details(business_id, json).then(
            (e) => {
                if (typeof e.id === "undefined") {
                    return
                }
                setBusinessClass(event.target.value)
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

        update_business_details(business_id, json).then(
            (e) => {
                if (typeof e.id === "undefined") {
                    return
                }
                setBusinessCategory(event.target.value)
            }
        );
    };

    const handleLoad = async (event) => {
        console.log(event)
    }

    const handleBusinessNameChange = (event) => {
        if (event.code === "Enter") {


            const json = JSON.stringify({"name": event.target.value})
            update_business_details(business_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setBusinessName(event.target.value)
                }
            )
        } else {
            setBusinessName(event.target.key)
        }
    }

    const handleTINChange = (event) => {
        console.log(event);
        if (event.code === "Enter") {

            const json = JSON.stringify({"tax_identification_number": event.target.value})
            update_business_details(business_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setTIN(event.target.value)
                }
            )
        } else {
            setTIN(event.target.key)
        }
    }
    const handleDAAssignedNumberChange = (event) => {
        console.log(event);
        if (event.code === "Enter") {

            const json = JSON.stringify({"da_assigned_number": event.target.value})
            update_business_details(business_id, json).then(
                (e) => {
                    if (typeof e.id === "undefined") {
                        return
                    }
                    setDAAssignedNumber(event.target.value)
                }
            )
        } else {
            setDAAssignedNumber(event.target.key)
        }
    }

    console.log("bee")
    console.log(business_id)


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/businesses/${business_id}`, {
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
                            setBusinessClass("1");
                        } else if (response.class === "2nd") {
                            setBusinessClass("2");
                        } else if (response.class === "3rd") {
                            setBusinessClass("3");
                        }
                    }
                    if (response.category != null) {
                        if (response.category === "residential") {
                            setBusinessCategory("1");
                        } else if (response.category === "commercial") {
                            setBusinessCategory("2");
                        } else if (response.category === "government") {
                            setBusinessCategory("3");
                        } else if (response.category === "mining") {
                            setBusinessCategory("4");
                        }
                    }
                    if (response.name != null) {
                        console.log(response.name)
                        setBusinessName(response.name);
                    }
                    if (response.tax_identification_number != null) {
                        setTIN(response.tax_identification_number);
                    }
                    if (response.da_assigned_number) {
                        setDAAssignedNumber(response.da_assigned_number);
                    }
                    setBusinessData(response)
                    return;
                }
                console.log("An error occurred");
            }
        )
    }, [])

    return (


        <Container sx={{alignContent: "center"}}>

            <Box>
                <div style={{
                    backgroundColor: "goldenrod",
                    textAlign: "center",
                    fontWeight: "bolder",
                    padding: "1rem 0",
                    fontSize: 20
                }}>
                    Enter Properties Details for ID <span id="upn">{businessData.id}</span>
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
                            value={businessClass}
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
                        <Typography variant="subtitle1">Name</Typography>
                        <TextField
                            name="Name"
                            sx={{minWidth: 200}}
                            onKeyDown={handleBusinessNameChange}
                            // onChange={(e, v) => {console.log(e); console.log(v)}}
                            value={businessName}
                        />
                    </Box>
                </Box>

            </Grid>

            <Typography>Business Information </Typography>
            <Divider sx={{color: "rebeccapurple"}}/>

            {/* Second Grid */}

            <Grid>

                <Box paddingTop="2rem" display="flex" columnGap="1rem" paddingBottom="0.99rem" flexDirection="initial">
                    {/*<Box>*/}
                    {/*    <Typography variant="subtitle1">Unique Parcel Number</Typography>*/}
                    {/*    <TextField*/}
                    {/*        variant="filled"*/}
                    {/*        style={{minWidth: 260}}*/}
                    {/*        value={businessData.unique_parcel_number}*/}
                    {/*        InputProps={{*/}
                    {/*            readOnly: true,*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Box>*/}

                    <Box>
                        <Typography variant="subtitle1">Tax Identification Number</Typography>
                        <TextField name="Physical Address" sx={{minWidth: 250}} onKeyDown={handleTINChange}
                                   value={TIN}/>
                    </Box>

                    <Box>
                        <Typography variant="subtitle1">DA Assigned Number</Typography>
                        <TextField name="Physical Address" sx={{minWidth: 250}} onKeyDown={handleDAAssignedNumberChange}
                                   value={DAAssignedNumber}/>
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
                            value={businessData.year_of_construction}
                        />
                    </Box>

                </Box>
                <Divider sx={{color: "rebeccapurple"}}/>


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
                            value={businessData.current_value}
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
                            value={businessData.current_impost}
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
                            value={businessData.payment_amount_due}
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
                            value={businessData.arrears}
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
                            value={businessData.revenue_collected}
                        />
                    </Box>

                </Box>
                <Divider sx={{color: "rebeccapurple"}}/>

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

export default BusinessEntry
