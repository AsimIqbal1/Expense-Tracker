import Creatable from "react-select/creatable";
import { ICreatableSelectProps } from "./CreatableSelect.types";
import { StyledSelectWrapper } from "../ReactSelectHOC";

const CreatableSelect = (props: ICreatableSelectProps) => (
    <StyledSelectWrapper>
        <Creatable {...props} />
    </StyledSelectWrapper>
)


export default CreatableSelect;