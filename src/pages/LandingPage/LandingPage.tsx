// import { Box, Container, Flex } from "@chakra-ui/layout";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { QuickFilters, TotalBalance, CategorizedExpense, RecentTransactions, AddExpense } from "ui/components";

const LandingPage = () => {
    return (
        <Box>
            <AddExpense />

            <Flex justify="space-between">
                <Text fontFamily="custom-bold" fontSize={"3xl"}>Overview</Text>
                <QuickFilters />
            </Flex>

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