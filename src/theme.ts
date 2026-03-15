import { createTheme, mergeThemeOverrides } from '@mantine/core';

const baseTheme = createTheme({
  components: {
    Input: {
      defaultProps: {
        variant: 'filled',
      },
    },
    Paper:{
      defaultProps: {
        p: 'lg'
      },
    }
  },
});

export const ASTTheme = mergeThemeOverrides(baseTheme, createTheme({
  colors: {
    astGreen: [
      '#f2fdf4',
      '#d6f5de',
      '#b8ecbf',
      '#9fe0a8',
      '#8FD070',
      '#7dd88a',
      '#70D081',
      '#70D0B1',
      '#4db898',
      '#2a7a5e',
    ],
  },
  primaryColor: 'astGreen',
  primaryShade: 6,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: '800',
    sizes: {
      h1: { fontSize: '3rem' },
      h2: { fontSize: '2.25rem' },
      h3: { fontSize: '1.75rem' },
    },
  },
  fontSizes: {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
},
  radius: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  shadows: {
    xs: '0 1px 4px rgba(0,0,0,0.06)',
    sm: '0 2px 12px rgba(0,0,0,0.08)',
    md: '0 4px 24px rgba(0,0,0,0.10)',
  },
  components: {
    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'lg',
        p: 'xl',
      },
    },
    Button: {
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
    },
    Image: {
      defaultProps: {
        radius: 'md',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
    },

  },
}));

export const EFFTheme =mergeThemeOverrides(baseTheme, createTheme({
  primaryColor: 'dark',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '1.75rem' },
      h2: { fontSize: '1.5rem' },
      h3: { fontSize: '1.25rem' },
    },
  },
  fontSizes: {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
},
  radius: {
    xs: '2px',
    sm: '3px',
    md: '4px',
    lg: '6px',
    xl: '8px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  shadows: {
    xs: '0 1px 2px rgba(0,0,0,0.10)',
    sm: '0 1px 4px rgba(0,0,0,0.12)',
    md: '0 2px 8px rgba(0,0,0,0.14)',
  },
  components: {
    Card: {
      defaultProps: {
        shadow: 'xs',
        radius: 'sm',
        p: 'sm',
      },
    },
    Button: {
      defaultProps: {
        radius: 'xs',
        size: 'sm',
      },
    },
    Image: {
      defaultProps: {
        radius: 'xs',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xs',
        size: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'xs',
        size: 'sm',
      },
    },
    Paper:{
      defaultProps: {
        withBorder:true
      },
    }
  },
}));
