/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SectionDuvidas = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Box id="duvidas" sx={{ py: 8 }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/imgs/faq-img.svg" alt="FAQ" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#dd4e77', mb: 2 }}>
                            Dúvidas Frequentes
                        </Typography>
                        {[
                            {
                                question: 'Quais serviços são oferecidos pela Psicóloga Angélica?',
                                answer: 'A Psicóloga oferece uma ampla gama de serviços, incluindo Psicoterapia Individual através da abordagem cognitivo-comportamental, Terapia de Casal e Familiar, Aconselhamento Psicológico, Psicoterapia de Grupo, Intervenção em Crises, Orientação Vocacional e Profissional e Reabilitação Psicossocial.'
                            },
                            {
                                question: 'Qual público a Psicóloga atende?',
                                answer: 'Atendo à crianças a partir de 2 anos, adolescentes e adultos.'
                            },
                            {
                                question: 'A Psicóloga atende presencialmente?',
                                answer: 'Sim, realizo atendimento presencial na clínica @Espaço Ressignificar, mas também realizo atendimento virtual.'
                            },
                            {
                                question: 'Atende pessoas do espectro?',
                                answer: 'Sim, realizo atendimento em pessoas do espectro.'
                            }
                        ].map((item, index) => (
                            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h6">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionDuvidas;