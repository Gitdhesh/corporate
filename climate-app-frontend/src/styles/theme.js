import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C6E49', // Earthy Green
      light: '#4C956C',
      dark: '#1B4332',
    },
    secondary: {
      main: '#FFC9B9',
      light: '#FFE5D9',
      dark: '#D4A373',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#E5E7EB',
    },
    warning: {
      main: '#FFD700', // Sunlight Yellow
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 4px 12px rgba(0, 0, 0, 0.08)', // soft shadow
    '0px 8px 24px rgba(0, 0, 0, 0.12)', // hover shadow
    // ... rest of the shadows
  ],
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
            },
            '&.Mui-focused': {
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      color: '#2C6E49',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.1rem',
      opacity: 0.9,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

export default theme; 