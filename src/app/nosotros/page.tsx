'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
  AlertTitle,
  CircularProgress,
  Divider,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu email';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor ingresa un mensaje';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demonstration - in real implementation, this would be an API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) throw new Error('Error sending message');

      setSubmitStatus('success');
      setStatusMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage(
        'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo más tarde.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 6,
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Contacto
          </Typography>
          <Typography
            variant='h6'
            sx={{
              mt: 2,
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Estamos para ayudarte. Envíanos un mensaje y te responderemos lo
            antes posible.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth='lg' sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                fontWeight={600}
                color='primary'
              >
                Información de Contacto
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ display: 'flex', mb: 3, alignItems: 'flex-start' }}>
                <LocationOnIcon
                  sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}
                />
                <Box>
                  <Typography variant='subtitle1' fontWeight={500}>
                    Dirección
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    gutterBottom
                  >
                    Calle 41 x 46 y 48, Centro
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Mérida, Yucatán, México CP 97000
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 3, alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant='subtitle1' fontWeight={500}>
                    Teléfono
                  </Typography>
                  <Typography
                    variant='body2'
                    component='a'
                    href='tel:+529991234567'
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    +52 (999) 123-4567
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 3, alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant='subtitle1' fontWeight={500}>
                    Email
                  </Typography>
                  <Typography
                    variant='body2'
                    component='a'
                    href='mailto:info@amanita.mx'
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    info@amanita.mx
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <AccessTimeIcon
                  sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}
                />
                <Box>
                  <Typography variant='subtitle1' fontWeight={500}>
                    Horario
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Sábados: 10:00 AM - 2:00 PM
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Domingos: Cerrado
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                fontWeight={600}
                color='primary'
              >
                Envíanos un Mensaje
              </Typography>

              <Divider sx={{ mb: 3 }} />

              {submitStatus && (
                <Alert
                  severity={submitStatus}
                  sx={{ mb: 3 }}
                  onClose={() => setSubmitStatus(null)}
                >
                  <AlertTitle>
                    {submitStatus === 'success' ? 'Éxito' : 'Error'}
                  </AlertTitle>
                  {statusMessage}
                </Alert>
              )}

              <Box component='form' onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label='Nombre'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      error={!!errors.name}
                      helperText={errors.name}
                      disabled={submitting}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={!!errors.email}
                      helperText={errors.email}
                      disabled={submitting}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label='Teléfono'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label='Asunto'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label='Mensaje'
                      name='message'
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      error={!!errors.message}
                      helperText={errors.message}
                      disabled={submitting}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      size='large'
                      disabled={submitting}
                      startIcon={
                        submitting ? (
                          <CircularProgress size={20} color='inherit' />
                        ) : null
                      }
                      sx={{ px: 4, py: 1, mt: 1 }}
                    >
                      {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            fontWeight={600}
            color='primary'
            textAlign='center'
          >
            Nuestra Ubicación
          </Typography>

          <Paper
            elevation={3}
            sx={{
              mt: 3,
              height: 450,
              width: '100%',
              bgcolor: 'grey.100',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* In a real implementation, this would be a Google Maps or other map component */}
            <Typography variant='body1' color='text.secondary'>
              Mapa interactivo (Google Maps se integraría aquí)
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
