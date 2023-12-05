// import { Box, Container, Flex } from "@chakra-ui/layout";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import {
    QuickFilters,
    TotalBalance,
    CategorizedExpense,
    RecentTransactions,
    AddExpense,
    CreateWallet,
    ExpenseTrend,
    ThemeSwitcher
} from "ui/components";

const LandingPage = () => {
    return (
        <Box>
            <Flex justifyContent="flex-end" pb="1rem" gap={2}>
                <AddExpense />
                <CreateWallet />
                <ThemeSwitcher />
            </Flex>

            <Flex justify="space-between">
                <Text fontFamily="custom-bold" fontSize={"4xl"}>Morning, Asim!</Text>
                <QuickFilters />
            </Flex>
            <ExpenseTrend />
            <SimpleGrid minChildWidth={"18rem"} spacing={4} mt={"1rem"} >
                {/* <Box><p>first</p><p>second</p></Box>
                <Container><p>first</p><p>second</p></Container>
                <Flex><p>first</p><p>second</p></Flex> */}
                <TotalBalance />
                <CategorizedExpense />
                <RecentTransactions />

            </SimpleGrid>

        </Box>
    )

}

export default LandingPage;