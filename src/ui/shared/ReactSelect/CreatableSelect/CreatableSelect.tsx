import Creatable from "react-select/creatable";
import { ICreatableSelectProps } from "./CreatableSelect.types";
import { useColorMode } from "@chakra-ui/react";
import { generateBaseSelectStyles } from "../ReactSelect.styles";
import theme from "theme";

const CreatableSelect = (props: ICreatableSelectProps) => {
    const { colorMode } = useColorMode();
    return (
        <Creatable
            styles={generateBaseSelectStyles(colorMode)}
            theme={(selectTheme) => ({
                ...selectTheme,
                ...theme as any
            })}
            {...props}

        />
    )
}

export default CreatableSelect;