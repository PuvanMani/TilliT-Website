import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/actions/authAction";

function LoginPage() {
    const nav = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [pass, setPass] = useState(true);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.authState)

    const [err, setErr] = useState({
        Email: false,
        Password: false,
    });
    const [errmsg, setErrmsg] = useState({
        Email: "Email Not Found",
        Password: "Check Your Password",
    });
    const onSubmit = () => {
        const err = {
            Email: Email == "",
            Password: Password == "",
        };
        setErr(err);
        if (Object.values(err).some((val) => val == true)) {

        } else {
            dispatch(login(Email, Password));
        }
    }



    useEffect(() => {
        if (isLoggedIn) {
            nav('/')
        }
    }, [isLoggedIn])
    return (
        <Box sx={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} sx={{ p: "15px" }}>
                    <Box>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ fontWeight: "700", fontSize: "24px !important" }}
                        >
                            Login
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
                            Please sign in to continue
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={err.Email}
                                helperText={err.Email ? (Email == "" ? "Email is required" : errmsg.Email) : ""}
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
                                helperText={err.Password ? (Password == "" ? "Password is required" : errmsg.Password) : ""}
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
                                    ) : (
                                        ""
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            sx={{
                                textTransform: "none",
                                color: "#676767",
                                fontSize: "12px !important",
                            }}
                        >
                            Forget Password ?
                        </Button>
                        <Link
                            to='/auth/signup'
                            style={{
                                textTransform: "none",
                                textDecoration: "underline",
                                color: "blue",
                                fontSize: "12px",
                                marginTop: "10px",
                            }}
                        >
                            Sign Up ?
                        </Link>
                    </Box>
                    <Button
                        onClick={onSubmit}
                        disableElevation
                        variant="contained"
                        style={{
                            backgroundColor: "#085e15",
                            fontWeight: "700",
                            borderRadius: "5px",
                            fontSize: "24px !important",
                            textTransform: "none",
                            height: "50px",
                        }}
                        fullWidth
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginPage;
