'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
  Fade,
  alpha,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Example featured content - this would be fetched from an API in a real implementation
const heroSlides = [
  {
    id: 1,
    title: 'Artesanía en Barro',
    subtitle: 'Tradicional de Yucatán',
    description:
      'Piezas únicas hechas a mano por artesanos locales siguiendo técnicas ancestrales',
    image: '/images/hero/hero-1.jpg', // Replace with your actual image path
    ctaText: 'Explorar Colección',
  },
  {
    id: 2,
    title: 'Ollas de Barro',
    subtitle: 'El sabor de la tradición',
    description:
      'Descubre cómo nuestras ollas de barro realzan el sabor de tus platos favoritos',
    image: '/images/hero/hero-2.jpg', // Replace with your actual image path
    ctaText: 'Ver Productos',
  },
  {
    id: 3,
    title: 'Diseño Artesanal',
    subtitle: 'Piezas decorativas únicas',
    description:
      'Cada pieza cuenta una historia y lleva el alma del artesano que la creó',
    image: '/images/hero/hero-3.jpg', // Replace with your actual image path
    ctaText: 'Conocer Más',
  },
];

// Product categories - styled like RetiroHome's categories section
const categories = [
  {
    id: 'ollas',
    name: 'Ollas de Barro',
    description: 'Para cocinar con el auténtico sabor tradicional',
    image: '/images/categories/ollas.jpg', // Replace with your actual image
    link: '/productos?categoria=ollas',
  },
  {
    id: 'jarros',
    name: 'Jarros y Vasos',
    description: 'Piezas para servir y disfrutar bebidas tradicionales',
    image: '/images/categories/jarros.jpg', // Replace with your actual image
    link: '/productos?categoria=jarros',
  },
  {
    id: 'decorativos',
    name: 'Artículos Decorativos',
    description: 'Piezas únicas para decorar tu hogar',
    image: '/images/categories/decorativos.jpg', // Replace with your actual image
    link: '/productos?categoria=decorativos',
  },
  {
    id: 'especiales',
    name: 'Ediciones Especiales',
    description: 'Colecciones limitadas con diseños exclusivos',
    image: '/images/categories/especiales.jpg', // Replace with your actual image
    link: '/productos?categoria=especiales',
  },
];

// Featured products to showcase
const featuredProducts = [
  {
    id: 'olla-tradicional',
    name: 'Olla Tradicional Grande',
    description:
      'Perfecta para cocinar frijoles, sopas y guisos tradicionales.',
    price: '$450 MXN',
    image: '/images/products/olla-tradicional.jpg', // Replace with your actual image
  },
  {
    id: 'jarro-mezcalero',
    name: 'Jarro Mezcalero',
    description:
      'Jarro tradicional para servir y disfrutar mezcal o bebidas tradicionales.',
    price: '$280 MXN',
    image: '/images/products/jarro-mezcalero.jpg', // Replace with your actual image
  },
  {
    id: 'centro-mesa',
    name: 'Centro de Mesa Decorativo',
    description:
      'Pieza decorativa única para mesa de comedor con motivos tradicionales mayas.',
    price: '$580 MXN',
    image: '/images/products/centro-mesa.jpg', // Replace with your actual image
  },
  {
    id: 'maceta-decorativa',
    name: 'Maceta Artesanal',
    description:
      'Maceta de barro con relieves geométricos inspirados en motivos prehispánicos.',
    price: '$420 MXN',
    image: '/images/products/maceta-decorativa.jpg', // Replace with your actual image
  },
];

// Storytelling content blocks similar to RetiroHome sections
const storyBlocks = [
  {
    id: 'tradition',
    title: 'Tradición',
    description:
      'Cada pieza de AMANITA es elaborada siguiendo técnicas ancestrales transmitidas por generaciones, preservando la esencia de la alfarería maya.',
    image: '/images/story/tradition.jpg', // Replace with your actual image
    alignment: 'left' as const,
  },
  {
    id: 'artisans',
    title: 'Artesanos',
    description:
      'Trabajamos con artesanos locales de Yucatán, apoyando a las comunidades y asegurando que cada pieza sea única y elaborada con dedicación y maestría.',
    image: '/images/story/artisans.jpg', // Replace with your actual image
    alignment: 'right' as const,
  },
  {
    id: 'sustainability',
    title: 'Sustentabilidad',
    description:
      'Utilizamos arcillas y materiales locales con procesos respetuosos con el medio ambiente, creando piezas que no solo son bellas sino también ecológicas.',
    image: '/images/story/sustainability.jpg', // Replace with your actual image
    alignment: 'left' as const,
  },
];

export default function HomepageContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State for hero slider
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle hero slider navigation
  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const toggleAutoplay = () => {
    setAutoplay((prev) => !prev);
  };

  // Autoplay effect for hero slider
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, activeSlide]);

  return (
    <Box>
      {/* Hero Slider Section - Similar to RetiroHome's full-width slider */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '85vh', sm: '80vh', md: '85vh' },
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {heroSlides.map((slide, index) => (
          <Fade
            key={slide.id}
            in={activeSlide === index}
            style={{
              display: activeSlide === index ? 'block' : 'none',
              height: '100%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              {/* Hero Image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Hero Content */}
              <Container
                maxWidth='lg'
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: '100%', md: '60%' },
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      mb: 1,
                      fontWeight: 500,
                      letterSpacing: 1.5,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Typography
                    variant='h1'
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      mb: 4,
                      maxWidth: '90%',
                      opacity: 0.9,
                    }}
                  >
                    {slide.description}
                  </Typography>
                  <Link
                    href='/productos'
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      variant='contained'
                      color='primary'
                      size='large'
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 0,
                        boxShadow: 'none',
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: 'primary.main',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      {slide.ctaText}
                    </Button>
                  </Link>
                </Box>
              </Container>
            </Box>
          </Fade>
        ))}

        {/* Slider Controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            width: '100%',
            zIndex: 10,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 1,
            px: { xs: 2, md: 5, lg: 10 },
          }}
        >
          <IconButton
            onClick={goToPrevSlide}
            sx={{
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.5)',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={toggleAutoplay}
            sx={{
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.5)',
              },
            }}
          >
            {autoplay ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton
            onClick={goToNextSlide}
            sx={{
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.5)',
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* Slide Indicators */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 2,
              gap: 1,
            }}
          >
            {heroSlides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: activeSlide === index ? 24 : 12,
                  height: 5,
                  bgcolor:
                    activeSlide === index
                      ? 'primary.main'
                      : 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Categories Section - Inspired by RetiroHome's categories */}
      <Box sx={{ py: 10, bgcolor: '#f8f8f8' }}>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant='h6'
              color='primary'
              sx={{
                fontWeight: 500,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              COLECCIONES
            </Typography>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 3,
                  bgcolor: 'primary.main',
                },
              }}
            >
              Nuestras Categorías
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category.id}>
                <Link
                  href={category.link}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      boxShadow: 'none',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3,
                        '& .category-image': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '120%' }}>
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes='(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw'
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s',
                        }}
                        className='category-image'
                      />
                    </Box>
                    <CardContent
                      sx={{
                        textAlign: 'center',
                        pt: 3,
                        pb: 4,
                      }}
                    >
                      <Typography
                        variant='h5'
                        component='h3'
                        gutterBottom
                        fontWeight={600}
                      >
                        {category.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{ mb: 2 }}
                      >
                        {category.description}
                      </Typography>
                      <Button
                        variant='text'
                        color='primary'
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        Ver Colección
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section - Similar to RetiroHome's featured products */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant='h6'
              color='primary'
              sx={{
                fontWeight: 500,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              DESTACADOS
            </Typography>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 3,
                  bgcolor: 'primary.main',
                },
              }}
            >
              Productos Destacados
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featuredProducts.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                      '& .product-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes='(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw'
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                      }}
                      className='product-image'
                    />
                  </Box>

                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      variant='h6'
                      component='h3'
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ mb: 2 }}
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='primary'
                      fontWeight={600}
                      sx={{ mb: 2 }}
                    >
                      {product.price}
                    </Typography>
                    <Link
                      href={`/productos/${product.id}`}
                      passHref
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        sx={{
                          borderRadius: 0,
                          py: 1,
                          textTransform: 'none',
                          fontWeight: 500,
                        }}
                      >
                        Ver Detalles
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Link href='/productos' passHref style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                }}
              >
                Ver Todos los Productos
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Story Block Sections - Similar to RetiroHome's story/feature sections */}
      {storyBlocks.map((block, index) => (
        <Box
          key={block.id}
          sx={{
            py: 10,
            bgcolor: index % 2 === 0 ? '#f8f8f8' : 'white',
          }}
        >
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={4}
              direction={
                isMobile
                  ? 'column-reverse'
                  : block.alignment === 'left'
                  ? 'row'
                  : 'row-reverse'
              }
              alignItems='center'
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    pr: block.alignment === 'left' && !isMobile ? 4 : 0,
                    pl: block.alignment === 'right' && !isMobile ? 4 : 0,
                  }}
                >
                  <Typography
                    variant='h6'
                    color='primary'
                    sx={{
                      fontWeight: 500,
                      letterSpacing: 1.5,
                      mb: 1,
                    }}
                  >
                    AMANITA
                  </Typography>
                  <Typography
                    variant='h2'
                    component='h2'
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {block.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '1.1rem',
                      mb: 4,
                      color: 'text.secondary',
                    }}
                  >
                    {block.description}
                  </Typography>
                  <Link
                    href='/nosotros'
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      variant='outlined'
                      color='primary'
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 0,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      Conocer Más
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 450 },
                    width: '100%',
                    overflow: 'hidden',
                    boxShadow: 4,
                  }}
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes='(max-width: 600px) 100vw, 50vw'
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* Testimonials/Quote Section - Inspired by RetiroHome's testimonials */}
      <Box
        sx={{
          py: 10,
          bgcolor: alpha(theme.palette.primary.main, 0.05),
          textAlign: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h6'
            color='primary'
            sx={{
              fontWeight: 500,
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            NUESTRA FILOSOFÍA
          </Typography>
          <Typography
            variant='h3'
            component='h2'
            sx={{
              fontWeight: 600,
              mb: 4,
              fontStyle: 'italic',
              lineHeight: 1.3,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            En cada pieza de barro hay una historia, una tradición y el alma de
            quien la crea. Preservamos el arte ancestral maya para conectar el
            pasado con el presente.
          </Typography>
          <Divider
            sx={{
              width: 100,
              mx: 'auto',
              mb: 3,
              borderColor: 'primary.main',
              borderWidth: 2,
            }}
          />
          <Typography variant='subtitle1' fontWeight={500}>
            María Hernández
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Fundadora y Maestra Artesana
          </Typography>
        </Container>
      </Box>

      {/* Instagram Gallery Section - Similar to RetiroHome's Instagram section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h6'
              color='primary'
              sx={{
                fontWeight: 500,
                letterSpacing: 1.5,
                mb: 1,
              }}
            >
              SÍGUENOS
            </Typography>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 3,
                  bgcolor: 'primary.main',
                },
              }}
            >
              @amanita_yucatan
            </Typography>
          </Box>

          <Grid container spacing={1}>
            {/* Instagram photos - Replace with actual Instagram feed in the future */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={item}>
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '100%',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    '&:hover': {
                      '& .instagram-overlay': {
                        opacity: 1,
                      },
                      '& .instagram-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Image
                    src={`/images/instagram/insta-${item}.jpg`} // Replace with your actual images
                    alt={`Instagram post ${item}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                    }}
                    className='instagram-image'
                  />
                  <Box
                    className='instagram-overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                      }}
                    >
                      Ver en Instagram
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant='outlined'
              color='primary'
              component='a'
              href='https://www.instagram.com/amanita_yucatan'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 0,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Seguir en Instagram
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Newsletter Section - Similar to RetiroHome's newsletter */}
      <Box
        sx={{
          py: 10,
          bgcolor: theme.palette.primary.main,
          color: 'white',
        }}
      >
        <Container maxWidth='md'>
          <Grid container spacing={4} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 500,
                  letterSpacing: 1.5,
                  mb: 1,
                }}
              >
                MANTENTE CONECTADO
              </Typography>
              <Typography
                variant='h3'
                component='h2'
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Suscríbete a Nuestro Boletín
              </Typography>
              <Typography variant='body1' sx={{ opacity: 0.9, mb: 2 }}>
                Recibe novedades sobre nuevas colecciones, información sobre
                artesanía en barro y contenido exclusivo.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component='form'
                noValidate
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                <TextField
                  fullWidth
                  placeholder='Tu correo electrónico'
                  variant='outlined'
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                    },
                  }}
                />
                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  sx={{
                    borderRadius: 0,
                    py: 1.8,
                    px: { xs: 2, sm: 4 },
                    whiteSpace: 'nowrap',
                    boxShadow: 'none',
                    bgcolor: alpha(theme.palette.common.black, 0.8),
                    '&:hover': {
                      bgcolor: theme.palette.common.black,
                    },
                  }}
                >
                  Suscribirme
                </Button>
              </Box>
              <Typography
                variant='caption'
                sx={{ display: 'block', mt: 1, opacity: 0.8 }}
              >
                Al suscribirte, aceptas nuestra Política de Privacidad y darte
                de alta en nuestra lista de correo.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Craftsmanship Section - Additional visual section inspired by RetiroHome's quality section */}
      <Box sx={{ position: 'relative', height: { xs: 350, md: 500 } }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Image
            src='/images/craftsmanship.jpg' // Replace with your actual image
            alt='Artesanía en Barro'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        <Container
          maxWidth='md'
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 500,
                letterSpacing: 1.5,
                mb: 2,
              }}
            >
              ARTESANÍA DE CALIDAD
            </Typography>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 4,
                maxWidth: '80%',
                mx: 'auto',
              }}
            >
              Cada pieza cuenta una historia de tradición y artesanía
            </Typography>
            <Link href='/nosotros' passHref style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 0,
                  fontSize: '1rem',
                }}
              >
                Nuestra Historia
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
