
import React, { useEffect, useState } from 'react'
import { Backdrop, Button, CircularProgress, Divider, FormControlLabel, Grid, Radio, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


function BuyPage() {

    const nav = useNavigate();
    const [FullName, setFullName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [City, setCity] = useState("")
    const [Pincode, setPincode] = useState("")
    const [ErrorObj, setErrorObj] = useState({
        FullName: false,
        Address: false,
        PhoneNumber: false,
        City: false,
        Pincode: false,
    })
    const dispatch = useDispatch();
    const { cartList, loading } = useSelector(state => state.cartState)
    // const { addressList, isTrue } = useSelector(state => state.addressState)


    const ConfimOrder = () => {

        let err = {
            FullName: FullName.trim() == "",
            Address: Address.trim() == "",
            PhoneNumber: PhoneNumber.trim() == "",
            City: City.trim() == "",
            Pincode: Pincode.trim() == "",
        }
        setErrorObj(err)
        if (Object.values(err).some(val => val == true)) {

        } else {
            // let data = {
            //     UserID: localStorage.getItem("userid"),
            //     ProductID: cartList.map(val => val._id),
            //     FullName: addressList.length == 0 ? FullName : addressList[0].FullName,
            //     Address: addressList.length == 0 ? Address : addressList[0].Address,
            //     PhoneNumber: addressList.length == 0 ? PhoneNumber : addressList[0].PhoneNumber,
            //     City: addressList.length == 0 ? City : addressList[0].City,
            //     Pincode: addressList.length == 0 ? Pincode : addressList[0].Pincode,
            //     Status: "Placed",
            //     CreatedDate: new Date(),
            //     OrderMode: "COD"
            // }
            // dispatch(createOrder(data, function (res) {
            //     if (res.Status) {
            //         orderPlaced().then(val => nav('/'))

            //     }
            // }))
        }

    }
    const SavetheAddress = () => {

        let err = {
            FullName: FullName.trim() == "",
            Address: Address.trim() == "",
            PhoneNumber: PhoneNumber.trim() == "",
            City: City.trim() == "",
            Pincode: Pincode.trim() == "",
        }
        setErrorObj(err)
        if (Object.values(err).some(val => val == true)) {

        } else {
            // dispatch(createAddress(FullName, Address, City, Pincode, localStorage.getItem("userid")))
        }
    }
    const DeletetheAddress = () => {
        // dispatch(deleteAddress(localStorage.getItem("userid")))
    }




    return (
        <Box sx={{ p: "20px", minHeight: "65vh" }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container spacing={3} justifyContent="center" alignItems='flex-start'>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12}>
                            {/* <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", p: 2, borderRadius: "12px" }}>
                                <Typography sx={{ fontWeight: "700" }}>Address</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#085e15" }}>{addressList[0]?.FullName ? addressList[0]?.FullName : FullName}</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#085e15" }}>{addressList[0]?.PhoneNumber ? addressList[0]?.PhoneNumber : PhoneNumber}</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#085e15" }}>{addressList[0]?.Address ? addressList[0]?.Address : Address}</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#085e15" }}>{addressList[0]?.City ? addressList[0]?.City : City}</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#085e15" }}>{addressList[0]?.Pincode ? addressList[0]?.Pincode : Pincode}</Typography>
                                {addressList.length == 0 ? "" : <Button disableElevation onClick={DeletetheAddress} variant='outlined' sx={{ fontSize: "12px", border: "1px solid #085e15", color: "#085e15", ":hover": { color: "#085e15", border: "1px solid #085e15", }, textTransform: "none", mt: 1, p: "5px 10px" }}>Delete This Address</Button>}
                            </Box> */}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' sx={{ fontSize: "16px" }}>Shiping Address</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant='outlined' error={ErrorObj["FullName"]} helperText={ErrorObj["FullName"] ? "Name is Required" : ""} value={FullName} size='small' fullWidth label="Full Name" onChange={(e) => {
                                if (e.target.value == "") {
                                    setErrorObj({ ...ErrorObj, FullName: true })
                                    setFullName(e.target.value)
                                } else {
                                    setErrorObj({ ...ErrorObj, FullName: false })
                                    setFullName(e.target.value)
                                }
                            }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant='outlined' value={PhoneNumber} error={ErrorObj["PhoneNumber"]} helperText={ErrorObj["PhoneNumber"] ? "Phone Number is Required" : ""} size='small' fullWidth label="Phone Number" onChange={(e) => {
                                if (e.target.value == "") {
                                    setErrorObj({ ...ErrorObj, FullName: true })
                                    setPhoneNumber(e.target.value)
                                } else {
                                    setErrorObj({ ...ErrorObj, FullName: false })
                                    setPhoneNumber(e.target.value)
                                }
                            }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant='outlined' value={Address} error={ErrorObj["Address"]} helperText={ErrorObj["Address"] ? "Address is Required" : ""} size='small' fullWidth label="House No, Address" onChange={(e) => {
                                if (e.target.value == "") {
                                    setErrorObj({ ...ErrorObj, FullName: true })
                                    setAddress(e.target.value)
                                } else {
                                    setErrorObj({ ...ErrorObj, FullName: false })
                                    setAddress(e.target.value)
                                }
                            }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant='outlined' value={City} error={ErrorObj["City"]} helperText={ErrorObj["City"] ? "City is Required" : ""} size='small' fullWidth label="City" onChange={(e) => {
                                if (e.target.value == "") {
                                    setErrorObj({ ...ErrorObj, FullName: true })
                                    setCity(e.target.value)
                                } else {
                                    setErrorObj({ ...ErrorObj, FullName: false })
                                    setCity(e.target.value)
                                }
                            }} />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField variant='outlined' value={Pincode} error={ErrorObj["Pincode"]} helperText={ErrorObj["Pincode"] ? "Pincode is Required" : ""} size='small' fullWidth label="Pincode" onChange={(e) => {
                                if (e.target.value == "") {
                                    setErrorObj({ ...ErrorObj, FullName: true })
                                    setPincode(e.target.value)
                                } else {
                                    setErrorObj({ ...ErrorObj, FullName: false })
                                    setPincode(e.target.value)
                                }
                            }} />
                        </Grid>
                        <Grid item xs={12} >
                            <Button disableElevation onClick={SavetheAddress} disabled={Object.values(ErrorObj).some(val => val == true) ? true : false} variant='contained' sx={{ fontSize: "12px", backgroundColor: "#085e15", color: "#FFF", ":hover": { backgroundColor: "#085e15", color: "#FFF" }, textTransform: "none", mt: 1, p: "5px 10px" }}>Save This Location</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' sx={{ fontSize: "16px" }}>Payment Method</Typography>
                            <FormControlLabel value="COD" control={<Radio defaultChecked={true} />} label="Cash On Delivery (COD)" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} justifyContent='space-around' sx={{ position: "sticky", top: 99 }}>
                    {/* <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", borderRadius: "6px", p: "15px", height: "100%" }}>
                        <Typography sx={{ display: "flex", justifyContent: "space-between", my: "10px", fontSize: { xs: "13px", sm: "17px" } }}> Product Price <span>&#8377; {cartList.length > 0 ? (cartList.map(val => val.product.OurPrice * val.Count).reduce((a, b) => a + b)) : ""}</span></Typography>
                        <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize: { xs: "13px", sm: "17px" } }}>Shipping Charge <span style={{ color: "green" }}>{cartList.length > 0 ? (cartList.map(val => val.product.OurPrice * val.Count).reduce((a, b) => a + b)) > 300 ? "Free" : `₹ 20` : ""}</span></Typography>
                        <Divider sx={{ my: "10px" }} />
                        <Typography sx={{ display: "flex", justifyContent: "space-between", my: "10px", fontSize: { xs: "13px", sm: "17px" } }}> Total Price <span>&#8377; {cartList.length > 0 ? (cartList.map(val => val.product.OurPrice * val.Count).reduce((a, b) => a + b)) > 200 ? (cartList.map(val => val.product.OurPrice * val.Count).reduce((a, b) => a + b)).toLocaleString() : (cartList.map(val => val.product.OurPrice * val.Count).reduce((a, b) => a + b)) + 20 : ""}</span></Typography>
                        <Divider sx={{ my: "10px" }} />
                        <Button disableElevation onClick={ConfimOrder} variant='contained' sx={{ fontSize: "12px", backgroundColor: "#085e15", color: "#FFF", ":hover": { backgroundColor: "#085e15", color: "#FFF" }, textTransform: "none", mt: 1, p: "5px 10px", width: "100%" }}>Confim Order</Button>
                    </Box> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default BuyPage
