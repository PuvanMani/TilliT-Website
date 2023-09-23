import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../component/card/productcard';
import { getProducts } from '../redux/actions/productsAction';


function SearchList() {
    const location = useLocation()
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productsState);


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProducts(location.search))
    }, [location.search])
    return (
        <Box sx={{ m: { xs: "10px", sm: "20px" }, minHeight: "70vh" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h5' sx={{ my: 2 }}>Search results</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        {products.length > 0 ? products.map(val => <Grid item xs={6} sm={3} md={2}> <ProductCard ProductData={val} /></Grid>) : ""}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchList
