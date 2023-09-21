import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import { PageRoute } from '../router/pageRoute';
import Footer from '../footer/footer';
function Layout() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12}>
                <Routes>
                    {PageRoute.map(val => <Route path={val.Path} element={val.Component} />)}
                </Routes>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default Layout
