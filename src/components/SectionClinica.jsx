/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, List, ListItem, Container, Box } from '@mui/material';

const SectionClinica = () => {
    return (
        <Box id="clinica" sx={{ backgroundImage: 'url(/imgs/fundo-2.png)', backgroundSize: 'cover', py: 8 }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#dd4e77', mb: 2 }}>
                            Cuidado Psicológico de Qualidade
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#e9afad', mb: 4 }}>
                            Este é o espaço onde se combinam o compromisso com o bem-estar mental e a entrega dedicada à oferta de cuidados de excelência. Sob a liderança da Psicóloga Angélica Souza, uma profissional apaixonada e altamente qualificada, oferecemos uma ampla gama de serviços de saúde mental e suporte psicológico para pessoas de todas as idades e origens. Venha explorar nosso ambiente acolhedor e desfrutar de uma abordagem personalizada e empática, onde cada cliente é valorizado e respeitado em sua jornada de desenvolvimento e autoconsciência.
                        </Typography>
                        <List>
                            {['Psicoterapia Individual', 'Psicoterapia de Grupo', 'Terapia de Casal e Familiar', 'Aconselhamento Psicológico', 'Intervenção em Crises', 'Orientação Vocacional e Profissional', 'Reabilitação Psicossocial'].map((item, index) => (
                                <ListItem key={index} sx={{ color: '#e9afad' }}>
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="/imgs/icon.png" alt="Ícone" style={{ width: '400px', height: '500px', marginLeft: '50px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionClinica;