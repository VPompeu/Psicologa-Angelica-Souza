/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, Button, Container, Box } from '@mui/material';

const SectionInicio = () => {
    return (
        <Box id="inicio" sx={{ background: 'linear-gradient(to right, #ff7a8a 0%, #ff7a8a 30%, #e9afad 30%, #e9afad 100%)', py: 8 }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/imgs/angelica-de-rosa.jpeg" alt="Angélica Souza" style={{ width: '400px', height: '500px', border: '5px solid #f3d0d0', borderRadius: '5px', marginTop: '70px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: '#0e315f', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                            Construindo Pontes para o Bem-Estar Mental: Bem-Vindo à Jornada da Autoconsciência.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#0e315f', mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                            Venha embarcar comigo em uma jornada de autoconhecimento e autoaceitação, onde você pode descobrir sua verdadeira essência e potencial ilimitado.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button variant="contained" href="https://wa.me/5551999635081" target="_blank" sx={{ bgcolor: '#0e315f', '&:hover': { bgcolor: '#1c3d6e' } }}>
                                Marque uma consulta
                            </Button>
                            <Button variant="contained" href="https://www.instagram.com/angelicasouza.psico/" target="_blank" sx={{ bgcolor: '#ff7a8a', '&:hover': { bgcolor: '#e66877' } }}>
                                Conheça meu trabalho
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionInicio;