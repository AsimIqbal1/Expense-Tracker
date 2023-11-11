import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        primary: {
            light: '#3498db',
            dark: '#2980b9',
        },
        secondary: {
            light: '#e74c3c',
            dark: '#c0392b',
        },
        background: {
            light: '#ecf0f1',
            dark: '#2c3e50',
        },
        text: {
            light: '#333',
            dark: '#ecf0f1',
        },
        border: {
            light: '#E6E6E6',
            dark: '#5C5C5C',
        },
        transparent: {
            light: 'transparent',
            dark: 'transparent'
        }
    },
    fonts: {
        normal: "custom-regular",
        bold: "custom-bold",
        semiBold: "custom-semibold",
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
    },

    // for padding/margins/gap purposes
    space: {
        x1: '0.25rem',
        x2: '0.5rem',
        x3: '0.75rem',
        x4: '1rem',
        x5: '1.25rem',
        x6: '1.5rem',
        x7: '1.75rem',
        x8: '2rem',
    },

    // for width/height purpose
    size: {
        x1: '5rem',
        x2: '10rem',
        x3: '15rem',
        x4: '20rem',
        x5: '25rem'
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
            },
            variants: {
                solid: {
                    bg: 'primary.light',
                    color: 'white',
                    _hover: {
                        bg: 'primary.dark',
                    },
                },
            },
        },
        Input: {
            baseStyle: {
                borderColor: 'primary.light',
            },
        },
    },
    styles: {
        global: (props: { colorMode: string; }) => ({
            body: {
                color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',
                bg: props.colorMode === 'dark' ? 'background.dark' : 'background.light',
            },
            '*::placeholder': {
                color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',
            },
        }),
    },
});

export default customTheme;
