import { Box, Flex, Text } from "@chakra-ui/react";
import { BasicSelect } from "ui/shared/ReactSelect";
import theme from "theme";
import { CreateWallet } from "./CreateWallet";
import { WALLETS } from "./WalletManagement.data";
import { WalletsOverview } from "./WalletsOverview";
import { WalletTransactions } from "./WalletTransactions";

const WalletManagement = () => {

    // fetch all wallets on this page
    const wallets = WALLETS;

    return (
        <Box p={theme.space.x4} >
            <Flex justifyContent="space-between" alignItems={"center"} flexWrap="wrap">
                <Box minWidth={theme.size.x3} >
                    <Text>Show data for wallets:</Text>
                    <BasicSelect
                        defaultValue={wallets}
                        isMulti
                        options={wallets}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => String(option.id)}
                    />
                </Box>
                <CreateWallet />
                {/* TODO: Manage wallet button */}
            </Flex>

            <Text fontSize={theme.fontSizes["4xl"]} mt={theme.space.x3}>Overview</Text>
            <WalletsOverview />
            <Text fontSize={theme.fontSizes["4xl"]} mt={theme.space.x3}>Transactions</Text>
            <WalletTransactions />
        </Box>
    )
}

export default WalletManagement;