import { Text, Flex, Box } from "@chakra-ui/layout";
import { Stat, StatArrow, StatHelpText } from "@chakra-ui/react";
import { CURRENCY } from "constants/UserConfig.constants";
import { StyledCard } from "ui/shared";
import { WithCardWrapper } from "..";
import { EXPENSES } from "./TotalBalance.data";

const TotalBalance = () => {

    return (
        <StyledCard title="Expenses">
            <WithCardWrapper>
                {EXPENSES.map((expense, index) => (
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
