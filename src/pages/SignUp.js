import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { getOtp, register } from "../redux/actions/authAction";
function SignUp() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn, otp } = useSelector(state => state.authState)
    const [Agree, setAgree] = useState(false);
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [WrongOTP, setWrongOTP] = useState(false);
    const [OTP, setOtp] = useState(false);

    const [Dial, setDial] = useState(false);
    const [pass, setPass] = useState(true);
    const [err, setErr] = useState({
        FullName: false,
        Email: false,
        Password: false,

    });
    const [errmsg, setErrmsg] = useState({
        UserName: "User Name is required",
        Password: "Password is required",
    });
    const GetOTP = () => {
        const err = {
            FullName: FullName == "",
            Email: Email == "",
            Password: Password == "",
        };
        setErr(err);
        if (Object.values(err).some((val) => val == true)) {

        } else {
            setDial(true)
            dispatch(getOtp(Email))

        }
    }

    const Register = () => {
        setWrongOTP(false)
        if (OTP == otp) {
            dispatch(register(Email, Password, FullName))
        } else {
            setWrongOTP(true)
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            nav('/')
        }
    }, [isLoggedIn])
    return (
        <Box sx={{ minHeight: "75vh", display: 'flex', alignItems: "center" }}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} sx={{ p: "15px" }}>
                    <Box>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ fontWeight: "700", fontSize: "24px !important" }}
                        >
                            Sign Up
                        </Typography>
                        <Typography
                            variant="span"
                            component="p"
                            sx={{
                                color: "#676767",
                                fontSize: "12px !important",
                                mt: "10px",
                                mb: "30px",
                            }}
                        >
                            Please Register to continue
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={err.FullName}
                                helperText={
                                    err.FullName ? FullName == "" ? "Full Name is required" : "" : ""
                                }
                                onChange={(e) => setFullName(e.target.value)}
                                fullWidth
                                variant="outlined"
                                label="Full Name"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={err.Email}
                                helperText={
                                    err.Email ? Email == "" ? "Email is required" : "" : ""
                                }
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                variant="outlined"
                                label="Email"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                error={err.Password}
                                helperText={
                                    err.Password ? Password == "" ? "Password is required" : errmsg.Password : ""
                                }
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                                label="Password"
                                size="small"
                                type={pass == true ? "Password" : "text"}
                                InputProps={{
                                    endAdornment: Password ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    setPass(!pass);
                                                }}
                                            >
                                                {!pass ? (<span class="material-symbols-outlined" style={{ color: err.Password ? "#d32f2f" : "" }}>
                                                    visibility
                                                </span>
                                                ) : (<span class="material-symbols-outlined" style={{ color: err.Password ? "#d32f2f" : "" }}>
                                                    visibility_off
                                                </span>
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ) : (""
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ fontSize: "12px", mt: "10px", }}>

                            <Checkbox
                                disableRipple
                                onChange={() => setAgree(!Agree)}
                                size="small"
                                icon={<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <rect x="0.328369" y="0.0939331" width="26.9872" height="26.6011" rx="5" fill="#F8F8F8" />
                                        <rect x="0.828369" y="0.593933" width="25.9872" height="25.6011" rx="4.5" stroke="#676767" stroke-opacity="0.5" />
                                    </g>
                                </svg>}
                                sx={{
                                    fontWeight: 400,
                                    p: 0,
                                    mr: "10px",
                                    width: "16px",
                                    "&.Mui-checked": {
                                        mr: "10px",
                                        py: "5px",
                                        color: "#085e15",
                                    },
                                }}
                            />
                            Agree Terms and Conditions
                        </Typography>
                        <Link
                            to='/auth/login'
                            style={{
                                textTransform: "none",
                                textDecoration: "underline",
                                color: "blue",
                                fontSize: "12px",
                                marginTop: "10px",
                            }}
                        >
                            Log In ?
                        </Link>
                    </Box>
                    <Button
                        onClick={GetOTP}
                        disabled={!Agree}
                        disableElevation
                        variant="contained"
                        style={{
                            marginTop: "10px",
                            backgroundColor: "#085e15",
                            fontWeight: "700",
                            borderRadius: "5px",
                            fontSize: "24px !important",
                            textTransform: "none",
                            height: "50px",
                        }}
                        fullWidth
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={Dial}>
                <Box sx={{ p: 2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography sx={{ mb: 1 }}>Enter OTP here</Typography>
                    <OTPInput
                        value={OTP}
                        onChange={(e) => setOtp(e)}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                            border: "1px solid #085e15",
                            borderRadius: "8px",
                            width: "54px",
                            height: "54px",
                            fontSize: "12px",
                            color: "#000",
                            fontWeight: "400",
                            caretColor: "blue"
                        }}
                        focusStyle={{
                            border: "1px solid #085e15",
                            outline: "none"
                        }}
                    />
                    {WrongOTP ? <p style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>Wrong OTP !</p> : ""}
                    <Box sx={{ display: "flex", justifyContent: 'end' }}>

                        <Button onClick={() => setDial(false)} style={{
                            marginTop: "10px",
                            // backgroundColor: "#085e15",
                            border: "1px solid #085e15",
                            color: "#085e15",
                            fontWeight: "700",
                            borderRadius: "5px",
                            marginRight: "10px",
                            fontSize: "24px !important",
                            textTransform: "none",
                        }}
                        >Cancel</Button>
                        <Button onClick={Register} style={{
                            marginTop: "10px",
                            backgroundColor: "#085e15",
                            color: "#FFF",
                            fontWeight: "700",
                            borderRadius: "5px",
                            fontSize: "24px !important",
                            textTransform: "none",
                        }}
                        >Submit</Button>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default SignUp;
