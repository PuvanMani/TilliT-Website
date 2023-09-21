import { Box, Grid } from '@mui/material'
import React from 'react'
import { PrimaryButton, MyTypography } from '../component/themes/themes'
import ProductCard from '../component/card/productcard'
import Mainbanner from '../component/card/mainbanner'
import SmallBanner from '../component/card/smallbanners'



const image = [
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
    'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
]
function Home() {
    return (
        <Box sx={{ minHeight: "75vh", p: 2 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Mainbanner />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <MyTypography>Most Popular Vegitables</MyTypography>
                    <PrimaryButton>View All</PrimaryButton>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: "flex", overflowX: "scroll", p: .5, "::-webkit-scrollbar": { display: "none" } }}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
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
            </Grid>

        </Box>
    )
}

export default Home
