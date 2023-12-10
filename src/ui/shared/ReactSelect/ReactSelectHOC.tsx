import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { generateBaseSelectStyles } from "./ReactSelect.styles";
import theme from 'theme'

export const StyledSelectWrapper = ({ children }: any) => {
    const { colorMode } = useColorMode();

    const cloneElement = React.cloneElement(
        children,
        Object.assign({}, children.props, {
            styles: generateBaseSelectStyles(colorMode),
            theme: (selectTheme: any) => ({
                ...selectTheme,
                ...theme as any
            })
        })
    )

    return cloneElement;
}
