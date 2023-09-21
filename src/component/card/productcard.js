import React from 'react';
import { ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AddButton, IncreDecreButton } from '../themes/themes';

export default function ProductCard() {
    return (
        <Card sx={{ minWidth: { xs: "180px", sm: "200px" }, maxWidth: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: { xs: "250px", md: "270px" }, boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;", mr: 2, p: { xs: "8px", sm: '13px' } }}>
            <CardMedia
                sx={{ height: "120px", width: "100%", objectFit: "center", borderRadius: "8px", textAlign: "center", }}
                image={`https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?w=2000`}
                title={`Name`}
            />
            <CardContent sx={{ p: 0, mt: 1 }}>
                <select style={{ padding: "2px 3px", border: "0.2px solid green", borderRadius: "3px", color: "green", display: "block", marginBottom: "3px" }}>
                    <option>500 g</option>
                    <option>1 kg</option>
                    <option>2 kg</option>
                    <option>5 kg</option>
                </select>
                <Link to={`/productview/3894y382`} style={{ textDecoration: "none" }}>
                    <Typography gutterBottom variant="h5" component="h6" sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#000", mt: 1, textOverflow: "ellipsis" }}>
                        {`Onion Small (சின்ன வெங்காயம்)`}
                    </Typography>
                </Link>
                <Typography variant='h6' sx={{ textDecoration: "line-through", color: "#000", m: 0, fontSize: "13px", p: 0, display: "inline-block", mr: 1 }}>₹ {`20`}</Typography>
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant='h6' sx={{ fontWeight: "600", color: "#000", m: 0, fontSize: "13px", p: 0 }}>₹ {`15`}</Typography>
                <AddButton>Add</AddButton>
                {1 > 2 ? <ButtonGroup>
                    <IncreDecreButton><span class="material-symbols-outlined" style={{ fontSize: "16px" }}>remove</span></IncreDecreButton>
                    <IncreDecreButton ><span class="material-symbols-outlined" style={{ fontSize: "16px" }}>add</span></IncreDecreButton>
                </ButtonGroup> : ""}
            </Box>
        </Card >
    );
}