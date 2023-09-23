import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AddButton, IncreDecreButton, MyTypography, TextBox } from '../themes/themes';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItemAction } from '../../redux/actions/cartAction';
import { ButtonGroup, IconButton } from '@mui/material';
import { toast } from 'react-toastify';



export default function ShopingCartCard({ ProductName, NetQuantity, Image, Price, ProductID }) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cartState)
    const [Quantity, setQuantity] = useState(0);

    const removeCartItem = () => {
        dispatch(removeCartItemAction(ProductID))
    }
    const handilecartItem = (e) => {
        dispatch(addCartItem(ProductID, Quantity + 1))
        toast.success("Item has Added in Cart")
    }
    const handilecartItemRemove = (e) => {
        if (Quantity == 1) {
            dispatch(removeCartItemAction(ProductID))
            toast.success("This Item has Deleted in Cart")
            setQuantity(0)
        } else {
            dispatch(addCartItem(ProductID, Quantity - 1))
            toast.success("1 Item has Removed in Cart")
        }
    }
    useEffect(() => {
        const CartQuantity = items?.find(i => i.ProductID == ProductID)
        if (CartQuantity) {
            setQuantity(CartQuantity.Quantity)
        }
    }, [items])
    return (
        <Card sx={{ display: 'flex', boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", sm: "space-between" }, alignItems: "center" }}>
            <CardMedia
                sx={{ width: "90%", height: "100%" }}
            >
                <img src={Image} alt={ProductName} width='100%' height="100%" style={{ objectFit: "cover" }} />
            </CardMedia>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
                <CardContent sx={{ width: "100%" }}>
                    <Typography sx={{ fontSize: "14px", mb: .5 }}>{ProductName}</Typography>
                    <MyTypography sx={{ fontSize: "16px", mb: .5 }}>₹ {Price}</MyTypography>
                    <Typography sx={{ fontSize: "14px", mb: .5 }}>{NetQuantity} g</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: 'center' }}>
                        <Typography sx={{ fontSize: "14px", mb: .5, display: "flex", justifyContent: "space-between", alignItems: "center" }}><span class="material-symbols-outlined" onClick={removeCartItem} style={{ padding: "2px", marginLeft: "10px", color: "red", border: "1px solid red", borderRadius: "3px" }}>delete_forever</span></Typography>
                        <ButtonGroup>
                            <IncreDecreButton onClick={handilecartItemRemove}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>remove</span></IncreDecreButton>
                            <AddButton style={{ padding: 0, fontSize: "12px" }} >{Quantity}</AddButton>
                            <IncreDecreButton onClick={handilecartItem}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>add</span></IncreDecreButton>
                        </ButtonGroup>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}