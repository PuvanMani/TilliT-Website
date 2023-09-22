import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AddButton, TextBox } from '../themes/themes';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItemAction } from '../../redux/actions/cartAction';
import { IconButton } from '@mui/material';



export default function ShopingCartCard({ Title, Image, Price, Count, ProductID }) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cartState)
    const [Quantity, setQuantity] = useState(0);

    const [QuantityErr, setQuantityErr] = useState(false);

    const handilecartItem = () => {
        if (Quantity == "" || Quantity == 0) {
            setQuantityErr(true)
        } else {
            setQuantityErr(false)
            dispatch(addCartItem(ProductID, Quantity))
        }
    }
    const removeCartItem = () => {
        dispatch(removeCartItemAction(ProductID))
    }

    useEffect(() => {
        const CartQuantity = items?.find(i => i.ProductID == ProductID)
        if (CartQuantity) {
            setQuantity(CartQuantity.Quantity)
        }

    }, [dispatch])
    return (
        <Card sx={{ display: 'flex', boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", minHeight: "210px", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "flex-start", sm: "space-between" }, alignItems: "center" }}>
            <CardMedia
                component="img"
                sx={{ minWidth: { xs: 150, sm: 150 }, height: 200 }}
                image={Image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", width: "100%" }}>
                <CardContent sx={{ width: "100%" }}>
                    <Typography sx={{ fontSize: "14px", mb: .5 }}>Name: {Title}</Typography>
                    <Typography sx={{ fontSize: "14px", mb: .5 }}>Price : ₹ {Price}</Typography>
                    <Typography sx={{ fontSize: "14px", mb: .5 }}>Count <TextBox onChange={(e) => {
                        if (e.target.value == "") {
                            setQuantityErr(true)
                            setQuantity(e.target.value)
                        } else if (e.target.value < 1) {
                            setQuantity(e.target.value)
                            setQuantityErr(false)
                        }
                        else {
                            setQuantityErr(false)
                            setQuantity(e.target.value)
                        }
                    }} value={Quantity} error={QuantityErr} helperText={QuantityErr ? "Enter Quantity" : ""} size='small' placeholder='Enter Quantity then Add' /></Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <AddButton onClick={handilecartItem}>Add</AddButton>
                        <IconButton style={{ p: 0, textAlign: "right" }} onClick={removeCartItem}>
                            <span class="material-symbols-outlined" style={{ backgroundColor: "red", color: "#FFF", padding: 2, borderRadius: "6px" }}>
                                close
                            </span>
                        </IconButton>
                    </Box>
                </CardContent>

            </Box>
        </Card>
    );
}