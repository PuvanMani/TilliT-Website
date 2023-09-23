import { Backdrop, Box, Button, ButtonGroup, CircularProgress, Divider, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AddButton, IncreDecreButton, MyTypography, SubTypography } from '../component/themes/themes'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../redux/actions/productAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeSkeliton from '../component/skeliton.js/homeSkeliton';
import { productRequest } from '../redux/slices/productSlice';
import { addCartItem, removeCartItemAction } from '../redux/actions/cartAction';


function ProductView() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.productState);
    const [Quantity, setQuantity] = useState(1)

    const { items } = useSelector(state => state.cartState);

    useEffect(() => {
        if (error) {
            toast.error(error, { position: toast.POSITION.TOP_CENTER })
            return;
        }
        dispatch(getSingleProduct(id))
        const CartQuantity = items?.find(i => i.ProductID == id)
        if (CartQuantity) {
            setQuantity(CartQuantity.Quantity)
        }

    }, [error, id])

    const handilecartItem = () => {
        dispatch(addCartItem(id, Quantity + 1))
        toast.success("Item has Added in Cart", { position: 'bottom-center' })
        setQuantity(Quantity + 1)
    }
    const handilecartItemRemove = (e) => {
        if (Quantity == 1) {
            dispatch(removeCartItemAction(id))
            toast.success("This Item has Deleted in Cart")
            setQuantity(0)
        } else {
            dispatch(addCartItem(id, Quantity - 1))
            toast.success("1 Item has Removed in Cart")
            setQuantity(Quantity - 1)
        }
    }

    return (
        <Box sx={{ minHeight: "75vh" }}>
            <Box sx={{ my: "10px", p: "10px" }}>
                {loading && <HomeSkeliton />}
                {product ? (<Grid container spacing={3}>
                    <Grid item xs={12} md={5} >
                        <Box sx={{ position: "sticky", top: "0px", }}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${product.Images[0].Image})`,
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
                                {product?.Images?.map((img, ind) => (
                                    <Box
                                        key={img}
                                        // onClick={() => handileclick(img.Document, ind)}
                                        sx={{
                                            // border: image[1] == ind ? "1px solid #550000" : "",
                                            backgroundImage: `url(${img.Image})`,
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
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={6}>
                        <MyTypography sx={{ fontSize: "20px" }}>{product.ProductName}</MyTypography>

                        <MyTypography >{product.MartketPrice}</MyTypography>
                        <SubTypography style={{ margin: "0px 0px" }}>₹ <span style={{ textDecoration: "line-through", }}>{product.MarketPrice}</span> </SubTypography>
                        <MyTypography style={{ margin: "5px 0px", display: "flex" }}>₹ {product.Price}</MyTypography>
                        <SubTypography style={{ marginLeft: 0, marginBottom: "10px" }}>{product.NetQuantity} g</SubTypography>

                        {
                            Quantity > 0 ? <ButtonGroup>
                                <IncreDecreButton onClick={handilecartItemRemove}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>remove</span></IncreDecreButton>
                                <AddButton style={{ padding: 0, fontSize: "12px" }} >{Quantity}</AddButton>
                                <IncreDecreButton onClick={handilecartItem}><span class="material-symbols-outlined" style={{ fontSize: "14px" }}>add</span></IncreDecreButton>
                            </ButtonGroup> : <AddButton onClick={handilecartItem}>Add</AddButton>
                        }


                        <MyTypography>Unit</MyTypography>
                        <SubTypography>{product.NetQuantity} g</SubTypography>
                        <MyTypography>Discription</MyTypography>
                        <SubTypography>{product.Discription}</SubTypography>
                        <MyTypography>Customer Care Details</MyTypography>
                        <SubTypography>support@tillit.in</SubTypography>
                        <MyTypography> Return Policy</MyTypography>
                        <SubTypography>The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 2 hours of delivery.
                            In case of an incorrect item, you may raise a replacement request only if the item in original condition.</SubTypography>
                    </Grid>
                </Grid>) : <div style={{ display: "flex", width: "100vw", height: "80vh", alignItems: "center", justifyContent: "center" }}><Link to='/' style={{ textDecoration: "none" }}><AddButton style={{ padding: "10px" }} onClick={() => dispatch(productRequest())}> <span class="material-symbols-outlined" style={{ marginRight: "10px" }}>home</span>Back to Home</AddButton></Link></div>}
                <Divider sx={{ my: "10px" }} />

            </Box>
        </Box>
    )
}

export default ProductView
