import ReactSelect from "react-select";
import { IBasicSelectProps } from "./BasicSelect.types";
import { StyledSelectWrapper } from "../ReactSelectHOC";

const BasicSelect = <T,>(props: IBasicSelectProps<T, boolean>) => (
    <StyledSelectWrapper>
        <ReactSelect
            {...props} />
    </StyledSelectWrapper>

)

export default BasicSelect;