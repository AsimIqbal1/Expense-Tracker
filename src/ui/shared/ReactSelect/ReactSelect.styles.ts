import { CSSObjectWithLabel } from "react-select";
import theme from "theme";

export const generateBaseSelectStyles = (colorMode: 'light' | 'dark') => ({
    control: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        height: '2.5rem',
        paddingInline: `${theme.space.x4} ${theme.space.x2}`,
        backgroundColor: theme.colors.transparent.light,
        borderRadius: theme.borderRadius.md,
    }),

    valueContainer: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        padding: 0
    }),

    menu: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        borderRadius: theme.borderRadius.base,
        backgroundColor: theme.colors.background[colorMode],
    }),

    option: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        backgroundColor: theme.colors.background[colorMode],
        ':not(:last-child)': {
            borderBottom: `1px solid ${theme.colors.border[colorMode]}`,
        },
        ':hover': {
            backgroundColor: theme.colors.primary[colorMode],
            cursor: 'pointer'
        }
    }),

    multiValue: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        backgroundColor: theme.colors.primary[colorMode],
        color: theme.colors.text[colorMode],
        borderRadius: theme.borderRadius.base,
    }),

    multiValueRemove: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        ':hover': {
            backgroundColor: theme.colors.primary[colorMode]
        },
    }),

})
