import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AddButton, IncreDecreButton } from '../themes/themes';
import { addCartItem, removeCartItemAction } from '../../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function ProductCard({ ProductData }) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cartState)
    const { ProductName, MarketPrice, Price, Images, _id, NetQuantity } = ProductData
    const [Quantity, setQuantity] = useState(0);

    const handilecartItem = (e) => {
        dispatch(addCartItem(_id, Quantity + 1))
        toast.success("Item has Added in Cart")
    }
    const handilecartItemRemove = (e) => {
        if (Quantity == 1) {
            dispatch(removeCartItemAction(_id))
            toast.success("This Item has Deleted in Cart")
            setQuantity(0)
        } else {
            dispatch(addCartItem(_id, Quantity - 1))
            toast.success("1 Item has Removed in Cart")
        }
    }

    useEffect(() => {
        const CartQuantity = items?.find(i => i.ProductID == _id)
        if (CartQuantity) {
            setQuantity(CartQuantity.Quantity)
        }
    }, [items])
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
                </Box>
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap" }}>
                <Box>
                    <Typography variant='h6' sx={{ textDecoration: "line-through", color: "#000", m: 0, fontSize: "13px", p: 0, display: "inline-block", mr: 1 }}>₹ {MarketPrice}</Typography>
                    <Typography variant='h6' sx={{ fontWeight: "600", color: "#000", m: 0, fontSize: "13px", p: 0 }}>₹ {Price}</Typography>
                </Box>
                {
                    Quantity > 0 ? <ButtonGroup>
                        <IncreDecreButton onClick={handilecartItemRemove}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>remove</span></IncreDecreButton>
                        <AddButton style={{ padding: 0, fontSize: "12px" }} >{Quantity}</AddButton>
                        <IncreDecreButton onClick={handilecartItem}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>add</span></IncreDecreButton>
                    </ButtonGroup> : <AddButton onClick={handilecartItem}>Add</AddButton>
                }

            </Box>
        </Card>
    );
}