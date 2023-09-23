import React, { useEffect, useState } from 'react'
import ShopingCartCard from '../component/card/ShopingCartCard'
import { useSelector } from 'react-redux'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AddButton, MyTypography } from '../component/themes/themes'

function ShoppingCart() {

    const { items, loading } = useSelector(state => state.cartState);
    const { isLoggedIn } = useSelector(state => state.authState);
    const [ItemPrice, setItemPrice] = useState(null)
    const [TaxPrice, setTaxPrice] = useState(null)
    const [TotalPrice, setTotalPrice] = useState(null)

    useEffect(() => {
        if (items.length > 0) {
            setItemPrice(items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b))
            setTaxPrice((items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) >= 200 ? items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) : items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) + 40) * 5 / 100)
            setTotalPrice(((items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) >= 200 ? items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) : items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b) + 40) * 5 / 100) + items.map(val => val.Price * val.Quantity).reduce((a, b) => a + b))
        }

    }, [items, loading])
    return (
        <Box sx={{ p: "20px", minHeight: "75vh" }}>
            {items.length > 0 ? <Grid container spacing={2}>

                <Grid item xs={12} lg={8}>
                    <Grid container spacing={2}>
                        {
                            items.map(val => {
                                return (<Grid item xs={12} sm={4}>
                                    <ShopingCartCard ProductID={val.ProductID} ProductName={val.ProductName} Image={val.Image} Price={val.Price} NetQuantity={val.NetQuantity} />
                                </Grid>)
                            })
                        }

                    </Grid>
                </Grid>

                <Grid item xs={12} lg={4}>
                    {items.length > 0 ? <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor: "#FFF", borderRadius: "6px", p: "15px" }}>
                        <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize: { xs: "12px", sm: "17px" } }}>Productss Price <span>₹  {ItemPrice} </span></Typography>
                        <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize: { xs: "12px", sm: "17px" } }}>Shipping Charge <span style={{ color: "green" }}>{ItemPrice >= 200 ? "Free" : `₹ 40`}</span></Typography>
                        <Divider sx={{ my: "10px" }} />
                        <Typography sx={{ display: "flex", justifyContent: "space-between", my: "10px", fontSize: { xs: "13px", sm: "17px" } }}>GST 5% <span>₹  {TaxPrice}</span></Typography>
                        <Divider sx={{ my: "10px" }} />
                        <Typography sx={{ display: "flex", justifyContent: "space-between", my: "10px", fontSize: { xs: "13px", sm: "17px" } }}> Total Price <span>₹  {TotalPrice}</span></Typography>
                        <Divider sx={{ my: "10px" }} />
                        {
                            isLoggedIn ? <Link to='/shopping/confirmorder'><Button disableElevation variant='contained' sx={{ fontSize: "12px", backgroundColor: "#085e15", color: "#FFF", ":hover": { backgroundColor: "#085e15", color: "#FFF" }, textTransform: "none", mt: 1, p: "5px 10px", width: "100%", position: "sticky", top: 10 }}>Check Out</Button></Link>
                                : <Link to='/auth/login'><Button disableElevation variant='contained' sx={{ fontSize: "12px", backgroundColor: "#085e15", color: "#FFF", ":hover": { backgroundColor: "#085e15", color: "#FFF" }, textTransform: "none", mt: 1, p: "5px 10px", width: "100%", position: "sticky", top: 10 }}>Check Out</Button></Link>
                        }
                    </Box> : ""}
                </Grid>
            </Grid> : <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: "50vh" }}><MyTypography style={{ fontSize: "20px" }}>No Item Found </MyTypography><Link to='/' style={{ textDecoration: "none" }}><AddButton style={{ padding: "5px 10px" }}>Back To Home</AddButton></Link></Box>}
        </Box>

    )
}

export default ShoppingCart
