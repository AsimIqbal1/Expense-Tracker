import { Box, Divider, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { IRoutePage } from "routes/routes.types";
import theme from "theme";
import { AddExpense, ThemeSwitcher } from "ui/components";

export interface INavbarProps {
    pageData: IRoutePage;
}


// TODO: Add a dates filter on navbar
const Navbar = (props: INavbarProps) => {
    const { pageData: { name, icon } } = props;
    // const { colorMode } = useColorMode();
    return (
        <Flex
            p={theme.space.x4}
            // borderBottom={`1px solid ${theme.colors.border[colorMode]}`}
            alignItems={"center"}
        >
            {/* <Icon
                mr={theme.space.x6}
                size="2xl"
                icon={icon}
                as={FontAwesomeIcon}
            /> */}
            <Text fontSize={theme.fontSizes["4xl"]}>{name}</Text>

            <Box marginLeft={"auto"}>
                <AddExpense />
                {/* <Divider orientation="vertical" color={customTheme.colors.border["dark"]} /> */}
                <ThemeSwitcher />
            </Box>

        </Flex>
    )
}

export default Navbar;