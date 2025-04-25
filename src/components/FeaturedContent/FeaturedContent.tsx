'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Skeleton,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// Define the content structure
export interface FeaturedContentType {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
  image: string;
}

interface FeaturedContentProps {
  initialContent?: FeaturedContentType;
}

export default function FeaturedContent({
  initialContent,
}: FeaturedContentProps) {
  // Default content if nothing is provided
  const defaultContent: FeaturedContentType = {
    title: 'Artesanía en Barro de Yucatán',
    subtitle: 'Tradición y calidad en cada pieza',
    description:
      'Descubre nuestra colección de ollas de barro hechas a mano por artesanos locales siguiendo técnicas ancestrales.',
    ctaButton: {
      text: 'Ver productos',
      link: '/productos',
    },
    image: '/images/featured/default-featured.jpg',
  };

  const [content, setContent] = useState<FeaturedContentType | null>(
    initialContent || null
  );
  const [loading, setLoading] = useState(!initialContent);

  // This useEffect would fetch the content from your API in the future
  useEffect(() => {
    if (initialContent) {
      setContent(initialContent);
      setLoading(false);
      return;
    }

    // Simulate API fetch with a timeout
    const timer = setTimeout(() => {
      setContent(defaultContent);
      setLoading(false);
    }, 500);

    // Future implementation would be:
    // async function fetchFeaturedContent() {
    //   try {
    //     const response = await fetch('/api/featured-content');
    //     const data = await response.json();
    //     setContent(data);
    //   } catch (error) {
    //     console.error('Error fetching featured content:', error);
    //     setContent(defaultContent);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchFeaturedContent();

    return () => clearTimeout(timer);
  }, [initialContent]);

  if (loading) {
    return (
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton variant='text' width='80%' height={60} />
              <Skeleton variant='text' width='60%' height={40} sx={{ mb: 2 }} />
              <Skeleton variant='text' width='100%' height={20} />
              <Skeleton variant='text' width='100%' height={20} />
              <Skeleton variant='text' width='90%' height={20} sx={{ mb: 3 }} />
              <Skeleton variant='rectangular' width={120} height={40} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton
                variant='rectangular'
                width='100%'
                height={400}
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  if (!content) return null;

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant='h1'
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              {content.title}
            </Typography>

            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 500,
                mb: 2,
              }}
            >
              {content.subtitle}
            </Typography>

            <Typography variant='body1' paragraph sx={{ mb: 3 }}>
              {content.description}
            </Typography>

            <Link
              href={content.ctaButton.link}
              passHref
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant='contained'
                color='primary'
                size='large'
                sx={{ px: 4 }}
              >
                {content.ctaButton.text}
              </Button>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: 400, lg: 500 },
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <Image
                src={content.image}
                alt={content.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes='(max-width: 600px) 100vw, 50vw'
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
