import { Box } from '@mui/material'
import React from 'react'


function SmallBanner({ val }) {
    return (
        <Box sx={{ minWidth: "400px", height: "200px", mr: 2 }}>
            <img width='100%' alt={val} style={{ objectFit: "cover" }} height='100%' src={val} />
        </Box>
    )
}

export default SmallBanner
