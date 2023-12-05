import { Button } from "@chakra-ui/react"
import { StyledButtonProps } from "./Button.types"

const StyledButton = (props: StyledButtonProps) => {
    return (
        <Button variant={"gradient"} {...props} />
    )
}

export default StyledButton;