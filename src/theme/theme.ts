// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

// Define brand colors
const terracotta = {
  main: '#AD5C35', // Main terracotta
  light: '#C27A57', // Light terracotta
  dark: '#8C4A2A', // Dark terracotta
  contrastText: '#FFFFFF',
};

const cream = {
  main: '#E8DFD1', // Main cream
  light: '#F5EFE7', // Light cream
  dark: '#D5C8B5', // Dark cream
  contrastText: '#333333',
};

const darkBrown = {
  main: '#5D4037', // Dark brown
  light: '#7D6158', // Light brown
  dark: '#3E2723', // Very dark brown
  contrastText: '#FFFFFF',
};

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: terracotta,
    secondary: darkBrown,
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: terracotta.main,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      color: terracotta.main,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 0, // RetiroHome uses more square elements
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 0,
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
