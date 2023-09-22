import { Backdrop, Box, CircularProgress, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { PrimaryButton, MyTypography } from '../component/themes/themes'
import ProductCard from '../component/card/productcard'
import Mainbanner from '../component/card/mainbanner'
import SmallBanner from '../component/card/smallbanners'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productsAction'
import HomeSkeliton from '../component/skeliton.js/homeSkeliton'



const image = [
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
]
function Home() {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector(state => state.productsState)

    useEffect(() => {
        dispatch(getProducts(null))
    }, [dispatch])

    return (
        <Box sx={{ minHeight: "75vh", p: 2 }}>
            {loading && <HomeSkeliton />}
            {products ? (<Grid container spacing={1}>
                <Grid item xs={12}>
                    <Mainbanner />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <MyTypography>Most Popular Vegitables</MyTypography>
                    <PrimaryButton>View All</PrimaryButton>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: "flex", overflowX: "scroll", p: .5, "::-webkit-scrollbar": { display: "none" } }}>
                        {products && products.map(val => <ProductCard ProductData={val} />)}
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <MyTypography>Offer for Bulk Purchase</MyTypography>
                </Grid>
                <Grid item xs={12} sx={{ overflowX: "scroll", display: "flex", "::-webkit-scrollbar": { display: "none" } }}>
                    {
                        image.map(val => <SmallBanner val={val} />)
                    }
                </Grid>
            </Grid>) : ""}

        </Box>
    )
}

export default Home
