import { Grid, List, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { MyTypography } from '../themes/themes'




const data = [
    { title: "Get to Know Us", list: [{ name: "About US" }, { name: "Privacy Policy" }, { name: "Tearms and Condition" }] },
    { title: "Help", list: [{ name: "Payment" }, { name: "Shiping" }, { name: "Report Problem" }] },
    { title: "Consumer Policy", list: [{ name: "Cancelation Policy" }, { name: "Tearms of Use" }, { name: "Privacy" }] },
    { title: "Social", list: [{ name: "Instagram" }, { name: "Facebook" }, { name: "LinkedIn" }] },
]
function Footer() {
    return (
        <Box sx={{ padding: "20px", backgroundColor: "#111723", color: "#FFF", }}>
            <Grid container>
                <Grid item xs={12} sm={10} >
                    <Grid container>
                        {data.map(val => {
                            return (<Grid item xs={6} sm={3}>
                                <MyTypography variant='h5' component='h5' sx={{ fontSize: "16px" }}>{val.title}</MyTypography>
                                <List>
                                    {val.list.map(sub => {
                                        return (
                                            <ListItem disablePadding >
                                                <Link to='/' style={{ textDecoration: "none", color: "inherit", fontSize: "13px" }}>{sub.name} </Link>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <MyTypography variant='h5' component='h5' sx={{ fontSize: "16px" }}>Contact Us</MyTypography>
                    <MyTypography variant='p' component='p' style={{ color: "#FFF", fontSize: "12px" }}>TilliT Pvt Ltd,
                        Pavoorchatram, 627808,<br />
                        Tenkasi, <br />
                        Tamil nadu, India.</MyTypography>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
