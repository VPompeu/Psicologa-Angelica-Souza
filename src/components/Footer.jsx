/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box id="copyright" sx={{ backgroundColor: '#142645', py: 3 }}>
            <Container>
                <Typography variant="body1" sx={{ color: '#dd4e77', textAlign: 'center' }}>
                    Desenvolvido por <a href="https://www.instagram.com/binarytechnology_/" target="_blank" style={{ color: '#dd4e77', textDecoration: 'none' }}>@Binary</a>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;