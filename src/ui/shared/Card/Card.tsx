import { Card as ChakraCard, CardBody as ChakraCardBody } from "@chakra-ui/card";
import { StyledCardProps } from "./Card.types";
import { Text } from "@chakra-ui/react";

const Card = (props: StyledCardProps) => {
    const { children, title, cardBodyProps, ...rest } = props;
    return (
        <ChakraCard {...rest}>
            <ChakraCardBody {...cardBodyProps}>
                {title && <Text fontFamily="custom-bold">{title}</Text>}
                {children}
            </ChakraCardBody>
        </ChakraCard>
    )
}

export default Card;