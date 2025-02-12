/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

const SectionSobre = () => {
    return (
        <Box id="sobre" sx={{ backgroundColor: '#f3d0d0', py: 8 }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#142645', mb: 2, textAlign: 'center' }}>
                            Quem é Angélica Souza?
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#0e315f', lineHeight: 1.6 }}>
                            Angélica Souza, uma jovem nascida em 9 de junho de 2000, é uma verdadeira inspiração. Com uma mente brilhante e um coração generoso, Angélica carrega consigo uma paixão pela vida que é contagiante.
                            <br /><br />
                            Graduada em Psicologia e pós-graduada em Terapia Cognitivo-Comportamental, Angélica dedica-se apaixonadamente ao estudo da mente humana e ao auxílio daqueles que necessitam de apoio psicológico. Sua empatia e compreensão são como bálsamos para aqueles que buscam orientação e ajuda.
                            <br /><br />
                            Além de sua dedicação aos estudos, Angélica encontra tempo para nutrir os laços afetivos que são tão importantes para ela. Sua família e amigos ocupam um lugar especial em seu coração, e ela faz questão de demonstrar seu amor e apreço por eles sempre que possível. Mas não são apenas os seres humanos que conquistaram o carinho de Angélica. Seus bichinhos de estimação, o Lion e a Laila (felinos), são parte integrante de sua vida e trazem alegria e companheirismo para seus dias.
                            <br /><br />
                            Em suma, Angélica Souza é uma jovem extraordinária, cujo amor pela vida e pelas pessoas ao seu redor ilumina o mundo com sua luz própria. Seu coração compassivo e sua determinação em fazer a diferença tornam-na verdadeiramente especial.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="/imgs/angelica.jpeg" alt="Angélica Souza" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionSobre;