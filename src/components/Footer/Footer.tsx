'use client';

import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component='footer' sx={{ bgcolor: '#f8f8f8', pt: 8, pb: 3 }}>
      <Container maxWidth='lg'>
        {/* Main Footer */}
        <Grid container spacing={4}>
          {/* Brand & About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Box sx={{ position: 'relative', width: 140, height: 40, mb: 2 }}>
                <Image
                  src='/images/logo.svg'
                  alt='AMANITA'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Typography variant='body2' color='text.secondary' paragraph>
                Artesanía en barro de Yucatán, México. Preservando tradiciones
                ancestrales con un toque contemporáneo.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto', pt: 2 }}>
                <IconButton
                  aria-label='Facebook'
                  size='small'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#3b5998',
                    },
                  }}
                >
                  <FacebookIcon fontSize='small' />
                </IconButton>
                <IconButton
                  aria-label='Instagram'
                  size='small'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#e1306c',
                    },
                  }}
                >
                  <InstagramIcon fontSize='small' />
                </IconButton>
                <IconButton
                  aria-label='Pinterest'
                  size='small'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#e60023',
                    },
                  }}
                >
                  <PinterestIcon fontSize='small' />
                </IconButton>
                <IconButton
                  aria-label='WhatsApp'
                  size='small'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: '#25D366',
                    },
                  }}
                >
                  <WhatsAppIcon fontSize='small' />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Products */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant='h6'
              fontWeight={600}
              gutterBottom
              sx={{
                pb: 1,
                mb: 2,
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                display: 'inline-block',
              }}
            >
              Productos
            </Typography>

            <Box
              component='nav'
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Link
                href='/productos?categoria=ollas'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Ollas de Barro
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/productos?categoria=jarros'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Jarros y Vasos
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/productos?categoria=decorativos'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Artículos Decorativos
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/productos?categoria=especiales'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Ediciones Especiales
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>
            </Box>
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant='h6'
              fontWeight={600}
              gutterBottom
              sx={{
                pb: 1,
                mb: 2,
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                display: 'inline-block',
              }}
            >
              Enlaces
            </Typography>

            <Box
              component='nav'
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Link
                href='/nosotros'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Sobre Nosotros
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/contacto'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Contacto
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/politica-privacidad'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Política de Privacidad
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>

              <Link
                href='/terminos-condiciones'
                passHref
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  component='span'
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'primary.main',
                      '& .arrow-icon': {
                        transform: 'translateX(3px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Términos y Condiciones
                  <ArrowForwardIcon
                    fontSize='small'
                    className='arrow-icon'
                    sx={{
                      ml: 0.5,
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'all 0.2s',
                    }}
                  />
                </Typography>
              </Link>
            </Box>
          </Grid>

          {/* Contact/Newsletter */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant='h6'
              fontWeight={600}
              gutterBottom
              sx={{
                pb: 1,
                mb: 2,
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                display: 'inline-block',
              }}
            >
              Contacto
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              paragraph
              sx={{ mb: 2 }}
            >
              Calle 41 x 46 y 48, Centro
              <br />
              Mérida, Yucatán, México
              <br />
              CP 97000
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              paragraph
              sx={{ mb: 3 }}
            >
              <strong>Email:</strong> info@amanita.mx
              <br />
              <strong>Teléfono:</strong> +52 (999) 123-4567
            </Typography>

            <Typography variant='body2' fontWeight={500} paragraph>
              Horario de Atención:
            </Typography>

            <Typography variant='body2' color='text.secondary' sx={{ mb: 0.5 }}>
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </Typography>

            <Typography variant='body2' color='text.secondary' sx={{ mb: 0.5 }}>
              Sábados: 10:00 AM - 2:00 PM
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              Domingos: Cerrado
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <Box
          sx={{ mt: 6, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
        >
          <Grid container spacing={2} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                © {currentYear} AMANITA. Todos los derechos reservados.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  gap: 2,
                }}
              >
                <Typography
                  variant='body2'
                  color='text.secondary'
                  component={Link}
                  href='/politica-privacidad'
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Privacidad
                </Typography>

                <Typography
                  variant='body2'
                  color='text.secondary'
                  component={Link}
                  href='/terminos-condiciones'
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Términos
                </Typography>

                <Typography
                  variant='body2'
                  color='text.secondary'
                  component={Link}
                  href='/sitemap'
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Mapa del Sitio
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
