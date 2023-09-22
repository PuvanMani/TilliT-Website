import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AddButton, Search, TextBox } from '../themes/themes';
import { addCartItem } from '../../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard({ ProductData }) {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cartState)
    const { ProductName, MarketPrice, Price, Images, _id, NetQuantity } = ProductData
    const [Quantity, setQuantity] = useState(0);
    const [QuantityErr, setQuantityErr] = useState(false);

    const handilecartItem = (e) => {
        if (Quantity == "" || Quantity == 0) {
            setQuantityErr(true)
        } else {
            setQuantityErr(false)
            dispatch(addCartItem(_id, Quantity))
        }
    }

    useEffect(() => {
        const CartQuantity = items?.find(i => i.ProductID == _id)
        if (CartQuantity) {
            setQuantity(CartQuantity.Quantity)
        }

    }, [])
    return (
        <Card sx={{ minWidth: { xs: "180px", sm: "200px" }, maxWidth: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: { xs: "250px", md: "270px" }, boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;", mr: 2, p: { xs: "8px", sm: '13px' } }}>
            <CardMedia
                sx={{ height: "120px", width: "100%", objectFit: "center", borderRadius: "8px", textAlign: "center", }}
                image={Images[0].Image}
                title={ProductName}
            />
            <CardContent sx={{ p: 0, mt: 1 }}>

                <Link to={`/productview/${_id}`} style={{ textDecoration: "none" }}>
                    <Typography gutterBottom variant="h5" component="h6" sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#000", mt: 1, textOverflow: "ellipsis" }}>
                        {ProductName}
                    </Typography>
                </Link>
                <Box sx={{ display: "flex" }}>
                    <Typography variant='h6' sx={{ color: "#000", m: 0, fontSize: "13px", p: 0, display: "inline-block", width: "30%" }}>{NetQuantity} g</Typography>
                    <TextBox value={Quantity} onChange={(e) => setQuantity(e.target.value)} error={QuantityErr} helperText={QuantityErr ? "Enter Quantity" : ""} size='small' placeholder='Enter Quantity then Add' />
                </Box>
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap" }}>
                <Box>
                    <Typography variant='h6' sx={{ textDecoration: "line-through", color: "#000", m: 0, fontSize: "13px", p: 0, display: "inline-block", mr: 1 }}>₹ {MarketPrice}</Typography>
                    <Typography variant='h6' sx={{ fontWeight: "600", color: "#000", m: 0, fontSize: "13px", p: 0 }}>₹ {Price}</Typography>
                </Box>
                <AddButton onClick={handilecartItem}>Add</AddButton>
            </Box>
        </Card>
    );
}