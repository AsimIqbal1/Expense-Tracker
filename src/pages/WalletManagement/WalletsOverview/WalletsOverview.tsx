import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import theme from "theme";
import { CURRENCY } from "constants/UserConfig.constants";
import { beautifyNumber } from "utils/numberFormatters";
import { IWalletsOverviewProps } from "./WalletsOverview.types";
import { IncomeExpenseTrend } from "./IncomeExpenseTrend";
import { WalletOverviewData } from "./WalletsOverview.data";

const WalletsOverview = (_props: IWalletsOverviewProps) => {
    const { colorMode } = useColorMode();

    // you would call API using react query to get data here..
    const data = {
        totalBalance: 460000,
        income: 120000,
        expense: 94000
    }
    return (
        <Flex my={theme.space.x2} p={`${theme.space.x4} ${theme.space.x6}`} border={`1px solid ${theme.colors.border[colorMode]}`} borderRadius={theme.borderRadius.md} justifyContent={"space-between"} alignItems={'center'}>
            <Box>
                <Text fontSize={theme.fontSizes["lg"]}>Overall Balance</Text>
                <Text fontSize={theme.fontSizes["3xl"]}>{CURRENCY} {beautifyNumber(data.totalBalance)}</Text>
            </Box>

            <Box>
                <Text fontSize={theme.fontSizes["lg"]}>Income</Text>
                <Text fontSize={theme.fontSizes["3xl"]}>{CURRENCY} {beautifyNumber(data.income)}</Text>
            </Box>

            <Box>
                <Text fontSize={theme.fontSizes["lg"]}>Expense</Text>
                <Text fontSize={theme.fontSizes["3xl"]}>{CURRENCY} {beautifyNumber(data.expense)}</Text>
            </Box>

            {/* <Flex flexGrow={0.6} h={theme.size.x2}> */}
            <IncomeExpenseTrend data={WalletOverviewData} />
            {/* </Flex> */}
        </Flex>
    )
}

export default WalletsOverview;