import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';

type ColorMode = 'light' | 'dark';

interface ThemeConfig {
    initialColorMode: ColorMode;
    useSystemColorMode: boolean;
}

interface ThemeColors {
    primary: {
        light: string;
        dark: string;
    };
    secondary: {
        light: string;
        dark: string;
    };
    background: {
        light: string;
        dark: string;
    };
    text: {
        light: string;
        dark: string;
    };
    border: {
        light: string;
        dark: string;
    };
    transparent: {
        light: string;
        dark: string;
    };
    success: {
        light: string;
        dark: string;
    };
    error: {
        light: string;
        dark: string;
    };
}

interface ThemeFonts {
    normal: string;
    bold: string;
    semiBold: string;
}

interface ThemeFontSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
}

interface ThemeBorderRadius {
    sm: string;
    md: string;
    lg: string;
}

interface ThemeSpace {
    x1: string;
    x2: string;
    x3: string;
    x4: string;
    x5: string;
    x6: string;
    x7: string;
    x8: string;
}

interface ThemeSize {
    x1: string;
    x2: string;
    x3: string;
    x4: string;
    x5: string;
    fullScreenWidth: string;
    fullScreenHeight: string;
    fullParentWidth: string;
    fullParentHeight: string;
}

interface ButtonVariantStyles {
    bg: string;
    color: string;
    _hover: {
        bg: string;
    };
    [key: string]: any;
}

interface ThemeButtonVariants {
    solid: ButtonVariantStyles
    | ((props: StyleFunctionProps) => ButtonVariantStyles);
    gradient: ButtonVariantStyles
    | ((props: StyleFunctionProps) => ButtonVariantStyles);
}

interface ThemeComponents {
    Button: {
        baseStyle: {
            borderRadius: string;
        };
        variants: ThemeButtonVariants;
    };
    Input: {
        baseStyle: {
            borderColor: string;
        };
    };
}

interface ThemeStyles {
    global: (props: { colorMode: ColorMode }) => {
        body: {
            color: string;
            bg: string;
        };
        '*::placeholder': {
            color: string;
        };
    };
}
interface Breakpoints {
    sm: string;   // e.g., '30em'
    md: string;   // e.g., '48em'
    lg: string;   // e.g., '62em'
    xl: string;   // e.g., '80em'
    '2xl': string; // e.g., '96em'
}

interface ITheme {
    config: ThemeConfig;
    colors: ThemeColors;
    fonts: ThemeFonts;
    fontSizes: ThemeFontSizes;
    borderRadius: ThemeBorderRadius;
    space: ThemeSpace;
    size: ThemeSize;
    components: ThemeComponents;
    styles: ThemeStyles;
    breakpoints: Breakpoints
}

const customTheme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        primary: {
            light: '#DB7CC2',
            dark: '#DB7CC2',
        },
        secondary: {
            light: '#A68EEE',
            dark: '#A68EEE',
        },
        background: {
            light: '#ecf0f1',
            dark: '#2c3e50',
        },
        text: {
            light: '#333',
            dark: '#ecf0f1',
        },
        success: {
            light: '#4fd18b',
            dark: '#4fd18b'
        },
        error: {
            light: '#d43833',
            dark: '#d4534e'
        },
        border: {
            light: '#CCCCCC',
            dark: '#FFFFFF14',
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
        x5: '25rem',
        fullScreenWidth: '100vw',
        fullScreenHeight: '100vh',
        fullParentWidth: '100%',
        fullParentHeight: '100%',
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
            },
            variants: {
                solid: (props: StyleFunctionProps) => {
                    const { colorMode } = props;
                    return {
                        bg: `primary[${colorMode}]`,
                        color: 'white',
                        _hover: {
                            bg: `primary[${colorMode === 'light' ? 'dark' : 'light'}]`,
                        },
                    }
                },
                gradient: (props: StyleFunctionProps) => {
                    const { colorMode } = props;
                    return (
                        {
                            bgGradient: `linear(to-r, primary.${colorMode}, secondary.${colorMode})`,
                            color: "white",
                            _hover: {
                                bgGradient: `linear(to-r, secondary.${colorMode}, primary.${colorMode})`,
                            },
                        }

                    )

                }
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
    breakpoints: {
        sm: '25rem',   // 480px and up (small screens, e.g., mobile devices)
        md: '48rem',   // 768px and up (medium screens, e.g., tablets)
        lg: '62em',   // 992px and up (large screens, e.g., small laptops)
        xl: '80em',   // 1280px and up (extra-large screens, e.g., desktops)
        '2xl': '96em', // 1536px and up (extra-large screens, e.g., larger desktops)
    }
});

export default customTheme as ITheme;
