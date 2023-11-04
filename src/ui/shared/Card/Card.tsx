import { Card as ChakraCard, CardBody as ChakraCardBody } from "@chakra-ui/card";
import { CardProps } from "./Card.types";
import { Text } from "@chakra-ui/react";

const Card = (props: CardProps) => {
    const { children, title } = props;
    return (
        <ChakraCard>
            <ChakraCardBody>
                {title && <Text fontFamily="custom-bold">{title}</Text>}
                {children}
            </ChakraCardBody>
        </ChakraCard>
    )
}

export default Card;