import { Flex } from "@chakra-ui/react";
import { WithCardWrapperProps } from "./WithCardWrapper.types";

const WithCardWrapper = (props: WithCardWrapperProps) => {
    const { children } = props;
    return (
        <Flex flexDirection="column" gap="4" mt="1rem" h={"16rem"} overflow={"scroll"}>
            {children}
        </Flex>
    )

}

export default WithCardWrapper;