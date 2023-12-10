import { Box, Flex } from "@chakra-ui/react";
import { CreateWallet } from "./CreateWallet";
import theme from "theme";
import { WALLETS } from "./WalletManagement.data";
import { BasicSelect } from "ui/shared/ReactSelect";
import { useState } from "react";

const WalletManagement = () => {

    // fetch all wallets on this page
    const wallets = WALLETS;
    const [selectedWallets, setSelectedWallets] = useState(wallets);

    return (
        <Box p={theme.space.x4}>
            <Flex p={theme.space.x4} justifyContent="space-between">
                <Box minWidth={theme.size.x3} alignSelf={"start"}>
                    <BasicSelect
                        defaultValue={selectedWallets}
                        isMulti
                        options={wallets}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => String(option.id)}
                    />
                </Box>
                <CreateWallet />

            </Flex>


        </Box>
    )
}

export default WalletManagement;