/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#142645' }}>
            <Container>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Link to="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src="/imgs/logo.png" alt="Logo" width="160" height="60" />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;