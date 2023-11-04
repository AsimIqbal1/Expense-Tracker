import { Text, Flex, Box } from "@chakra-ui/layout";
import { Avatar, Stat, StatArrow, StatHelpText } from "@chakra-ui/react";
import { CURRENCY } from "constants/UserConfig.constants";
import { EXPENSES } from "./CategorizedExpense.data";
import { StyledCard } from "ui/shared";
import { WithCardWrapper } from "..";

const CategorizedExpense = () => {

    return (
        <StyledCard title="Expenses By Categories">
            <WithCardWrapper>
                {EXPENSES.sort((a, b) => b.amount - a.amount).map((expense, index) => (
                    <Flex key={index} flexDirection="row" gap={4} alignItems={"center"} justifyContent="space-between">
                        <Flex gap={4}>
                            <Avatar icon={expense.icon} background={"pink.200"} />
                            <Box>
                                <Text >{expense.category}</Text>
                                <Text fontFamily="custom-bold" fontSize="lg">{CURRENCY}{expense.amount}</Text>
                            </Box>
                        </Flex>
                        <Stat flex="none">
                            <StatHelpText>
                                <StatArrow type={`${expense.trend > 0 ? 'increase' : 'decrease'}`} color={`${expense.trend > 0 ? 'red.400' : 'green.400'}`} />
                                {expense.difference}
                            </StatHelpText>
                        </Stat>
                    </Flex>
                ))}
            </WithCardWrapper>
        </StyledCard>
    )
}

export default CategorizedExpense;
