import { Avatar, Box, Flex, Tag, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import theme from 'theme';
import { IWalletTransactionsProps } from "./WalletTransactions.types";
import { WalletTransactionsData } from "./WalletTransactions.data";
import { CURRENCY } from "constants/UserConfig.constants";

const WalletTransactions = (props: IWalletTransactionsProps) => {
    const { colorMode } = useColorMode();
    const walletTransactions = WalletTransactionsData;
    return (
        <Flex my={theme.space.x2} p={theme.space.x4} border={`1px solid ${theme.colors.border[colorMode]}`} borderRadius={theme.borderRadius.md} flexDir="column" gap={theme.space.x4}>
            {walletTransactions.map(trans => (
                <Flex border={`1px solid ${theme.colors.border[colorMode]}`} color={theme.colors.text[colorMode]} p={theme.space.x3} borderRadius={theme.borderRadius.md} justifyContent={"space-between"} align="center">
                    <Text width={theme.size.x3}>{trans.merchant}</Text>
                    <Text width={theme.size.x3}>{trans.date}</Text>
                    <Box width={theme.size.x3}>
                        {trans.wallets.map(wallet => (
                            <Tooltip label={`${CURRENCY} ${wallet.amount}`}>
                                <Tag ml={theme.space.x1}>{wallet.name}</Tag>
                            </Tooltip>
                        ))}
                    </Box>
                    <Box width={theme.size.x1}>
                        <Tooltip label={trans.category.name} >
                            <Avatar icon={trans.category.icon} size="sm" bg={theme.colors.secondary[colorMode]} />
                        </Tooltip>
                    </Box>
                    <Text width={theme.size.x3}>{trans.notes}</Text>
                    <Text width={theme.size.x3}>{`${CURRENCY} ${trans.amount}`}</Text>
                </Flex>
            ))}
        </Flex>
    )
}

export default WalletTransactions;