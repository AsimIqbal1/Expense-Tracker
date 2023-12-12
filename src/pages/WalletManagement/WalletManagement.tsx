import { Box, Flex, Text } from "@chakra-ui/react";
import { BasicSelect } from "ui/shared/ReactSelect";
import { CreateWallet } from "./CreateWallet";
import { WALLETS } from "./WalletManagement.data";
import theme from "theme";
import { WalletsOverview } from "./WalletsOverview";

const WalletManagement = () => {

    // fetch all wallets on this page
    const wallets = WALLETS;

    return (
        <Box p={theme.space.x4}>
            <Flex justifyContent="space-between">
                <Box minWidth={theme.size.x3} >
                    <Text>Wallets</Text>
                    <BasicSelect
                        defaultValue={wallets}
                        isMulti
                        options={wallets}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => String(option.id)}
                    />
                </Box>
                <CreateWallet />
            </Flex>
            <WalletsOverview />

        </Box>
    )
}

export default WalletManagement;