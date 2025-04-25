'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  useTheme,
  Divider,
  alpha,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation links with dropdowns
const navigation = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Productos',
    href: '/productos',
    submenu: [
      { name: 'Ollas de Barro', href: '/productos?categoria=ollas' },
      { name: 'Jarros y Vasos', href: '/productos?categoria=jarros' },
      {
        name: 'Artículos Decorativos',
        href: '/productos?categoria=decorativos',
      },
      { name: 'Ediciones Especiales', href: '/productos?categoria=especiales' },
    ],
  },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const theme = useTheme();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  // Handle scroll effect for transparent navbar on homepage
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      if (pathname === '/') {
        setNavbarTransparent(position < 100);
      } else {
        setNavbarTransparent(false);
      }
    };

    // Initial check for non-home pages
    if (pathname !== '/') {
      setNavbarTransparent(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubMenuToggle = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const logoSrc = navbarTransparent
    ? '/images/logo-white.svg'
    : '/images/logo.svg';

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          bgcolor: navbarTransparent ? 'transparent' : 'white',
          color: navbarTransparent ? 'white' : 'text.primary',
          boxShadow: navbarTransparent ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          borderBottom: navbarTransparent ? 'none' : '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar
            disableGutters
            sx={{ height: { xs: 64, md: 80 }, justifyContent: 'space-between' }}
          >
            {/* Logo */}
            <Link
              href='/'
              passHref
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ position: 'relative', width: 150, height: 40 }}>
                <Image
                  src={logoSrc}
                  alt='AMANITA'
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 4,
              }}
            >
              {navigation.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    position: 'relative',
                    mx: 1,
                    '&:hover .dropdown-menu': {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      sx={{
                        color: navbarTransparent
                          ? 'white'
                          : pathname === item.href ||
                            (item.submenu && pathname?.startsWith(item.href))
                          ? 'primary.main'
                          : 'text.primary',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        textTransform: 'none',
                        borderBottom:
                          pathname === item.href ||
                          (item.submenu && pathname?.startsWith(item.href))
                            ? '2px solid'
                            : '2px solid transparent',
                        borderColor: 'primary.main',
                        borderRadius: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: navbarTransparent ? 'white' : 'primary.main',
                        },
                      }}
                      endIcon={item.submenu && <KeyboardArrowDownIcon />}
                    >
                      {item.name}
                    </Button>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <Box
                      className='dropdown-menu'
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        minWidth: 200,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                        mt: 0.5,
                        p: 1,
                        zIndex: 1,
                        opacity: 0,
                        visibility: 'hidden',
                        transform: 'translateY(10px)',
                        transition: 'all 0.2s',
                        display: 'block',
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          passHref
                          style={{ textDecoration: 'none' }}
                        >
                          <Button
                            fullWidth
                            sx={{
                              color: 'text.primary',
                              textAlign: 'left',
                              justifyContent: 'flex-start',
                              py: 1,
                              px: 2,
                              textTransform: 'none',
                              '&:hover': {
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                color: 'primary.main',
                              },
                            }}
                          >
                            {subItem.name}
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '85%',
            maxWidth: 350,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', width: 120, height: 35 }}>
            <Image
              src='/images/logo.svg'
              alt='AMANITA'
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <IconButton color='inherit' onClick={handleDrawerToggle} edge='end'>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ pt: 1 }}>
          {navigation.map((item) => (
            <Box key={item.name}>
              {!item.submenu ? (
                <ListItem disablePadding>
                  <Link
                    href={item.href}
                    passHref
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <ListItemButton
                      onClick={handleDrawerToggle}
                      sx={{
                        py: 1.5,
                        color:
                          pathname === item.href
                            ? 'primary.main'
                            : 'text.primary',
                        borderLeft:
                          pathname === item.href
                            ? '3px solid'
                            : '3px solid transparent',
                        borderColor: 'primary.main',
                        pl: pathname === item.href ? 2 : 2.5,
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          fontWeight: pathname === item.href ? 600 : 500,
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ) : (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleSubMenuToggle(item.name)}
                      sx={{
                        py: 1.5,
                        color: pathname?.startsWith(item.href)
                          ? 'primary.main'
                          : 'text.primary',
                        borderLeft: pathname?.startsWith(item.href)
                          ? '3px solid'
                          : '3px solid transparent',
                        borderColor: 'primary.main',
                        pl: pathname?.startsWith(item.href) ? 2 : 2.5,
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          fontWeight: pathname?.startsWith(item.href)
                            ? 600
                            : 500,
                        }}
                      />
                      {openSubMenu === item.name ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </ListItemButton>
                  </ListItem>

                  <Collapse
                    in={openSubMenu === item.name}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {item.submenu.map((subItem) => (
                        <ListItem key={subItem.name} disablePadding>
                          <Link
                            href={subItem.href}
                            passHref
                            style={{ textDecoration: 'none', width: '100%' }}
                          >
                            <ListItemButton
                              onClick={handleDrawerToggle}
                              sx={{
                                pl: 4,
                                py: 1,
                                bgcolor: alpha(
                                  theme.palette.primary.main,
                                  0.05
                                ),
                              }}
                            >
                              <ListItemText
                                primary={subItem.name}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  color:
                                    pathname === subItem.href
                                      ? 'primary.main'
                                      : 'text.secondary',
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              )}
            </Box>
          ))}
        </List>

        <Box sx={{ p: 3, mt: 2 }}>
          <Typography variant='subtitle2' color='text.secondary' gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant='body2' sx={{ mb: 1 }}>
            info@amanita.mx
          </Typography>
          <Typography variant='body2'>+52 (999) 123-4567</Typography>
        </Box>
      </Drawer>
    </>
  );
}
