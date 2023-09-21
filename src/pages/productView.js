import { Backdrop, Box, Chip, CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'

function ProductView() {
    const product = {
        ImageURL: [
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
            'https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
        ]
    }
    return (
        <Box sx={{ minHeight: "75vh" }}>
            <Box sx={{ my: "10px", p: "10px" }}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={false}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5} >
                        <Box sx={{ position: "sticky", top: "0px", }}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${product.ImageURL[0]})`,
                                    borderRadius: "12px",
                                    marginTop: "10px",
                                    width: '100%',
                                    height: { xs: "300px", sm: "400px" },
                                    backgroundSize: 'cover',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    color: "#FFF",
                                }} />
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {product?.ImageURL?.map((img, ind) => (
                                    <Box
                                        key={img}
                                        // onClick={() => handileclick(img.Document, ind)}
                                        sx={{
                                            // border: image[1] == ind ? "1px solid #550000" : "",
                                            backgroundImage: `url(${img})`,
                                            display: 'flex',
                                            cursor: "pointer",
                                            borderRadius: "12px",
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            m: "10px",
                                            justifyContent: 'end',
                                            width: '50px',
                                            height: "50px",
                                            backgroundSize: 'cover',
                                            backgroundPosition: "center",
                                            color: "#FFF",
                                        }} />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ProductView
