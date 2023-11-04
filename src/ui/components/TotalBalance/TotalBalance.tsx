import { Text, Flex, Box } from "@chakra-ui/layout";
import { Stat, StatArrow, StatHelpText } from "@chakra-ui/react";
import { CURRENCY } from "constants/UserConfig.constants";
import { StyledCard } from "ui/shared";
import { WithCardWrapper } from "..";

const TotalBalance = () => {
    const expenses = [
        {
            amount: 54030,
            text: 'This month',
            difference: '2%',
            trend: 1,
        },
        {
            amount: 4530,
            text: 'Last 7 days',
            difference: '2%',
            trend: -1,
        },
        {
            amount: 76003,
            text: 'Last 30 days',
            difference: '8%',
            trend: -1,
        },
    ];

    return (
        <StyledCard title="Expenses">
            <WithCardWrapper>
                {expenses.map((expense, index) => (
                    <Flex key={index} flexDirection="row" justifyContent="space-between" alignItems={"center"}>
                        <Box>
                            <Text >{expense.text}</Text>
                            <Text fontFamily="custom-bold" fontSize="xl">{CURRENCY}{expense.amount}</Text>
                        </Box>
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

export default TotalBalance;
