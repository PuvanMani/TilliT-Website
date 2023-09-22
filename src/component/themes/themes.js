import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//Primary Button
export const PrimaryButton = styled(Button)({
    background: "green",
    border: 0,
    borderRadius: 3,
    padding: "3px 10px",
    boxShadow: '0 3px 5px 2px',
    textTransform: "none",
    color: 'white',
});

export const Search = styled(TextField)({
    input: {
        height: 16,
    },
});
export const TextBox = styled(TextField)({
    input: {
        height: 10,
        fontSize: "12px",
        padding: "7px"
    },
});

export const MyTypography = styled(Typography)({
    fontFamily: `'Heebo', 'sans-serif'`,
    fontWeight: "500",
});
export const SubTypography = styled(Typography)({
    fontFamily: `'Heebo', 'sans-serif'`,
    fontWeight: "400",
    fontSize: "14px",
    margin: "5px 10px"
});
export const MyLink = styled(Link)({
    textDecoration: "none",
    color: "#000"
});


export const AddButton = styled(Button)({
    color: "#085e15",
    ":hover": { color: "#085e15", border: "1px solid #085e15" },
    border: "1px solid #085e15",
    textTransform: "none",
    fontSize: "12px",
    padding: "3px 0px"
});
export const IncreDecreButton = styled(Button)({
    backgroundColor: "#085e15",
    color: "#FFF",
    ":hover": { backgroundColor: "#085e15", color: "#FFF", border: "1px solid #085e15" },
    border: "1px solid #085e15",
    textTransform: "none",
    padding: "5px 0px",
});


