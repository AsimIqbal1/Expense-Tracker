import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const QuickFilters = () => {
    const [activeButton, setActiveButton] = useState(0);
    const buttons = [
        {
            text: 'This Week',
            value: 0,
        },
        {
            text: 'This Month',
            value: 1,
        },
        {
            text: 'Custom Range',
            value: 2,
        }
    ];

    const onButtonClick = (value: number) => (_: React.MouseEvent<HTMLElement>) => {
        setActiveButton(value);
    }

    return (
        <Flex gap={2}>
            {buttons.map(button => (
                <Button
                    variant={activeButton === button.value ? "solid" : "ghost"}
                    colorScheme="blue"
                    onClick={onButtonClick(button.value)}
                >
                    {button.text}
                </Button>
            ))}

        </Flex>
    )
}

export default QuickFilters;