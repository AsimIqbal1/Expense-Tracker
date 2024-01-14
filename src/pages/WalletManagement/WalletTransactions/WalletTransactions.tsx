import { Avatar, Box, Flex, Tag, Text, Tooltip, useColorMode, useDisclosure } from "@chakra-ui/react";
import theme from 'theme';
import { IWalletTransactionsProps } from "./WalletTransactions.types";
import { WalletTransactionsData } from "./WalletTransactions.data";
import { CURRENCY } from "constants/UserConfig.constants";
import { Transaction, TransactionDetailsModal } from "ui/components";
import { useState } from "react";

const WalletTransactions = (_props: IWalletTransactionsProps) => {
    const { colorMode } = useColorMode();
    const { onOpen, onClose } = useDisclosure();

    const walletTransactions = WalletTransactionsData;
    const [openedTransaction, setOpenedTransaction] = useState<Transaction>();

    const showTransactionDetails = (transaction: Transaction) => () => {
        setOpenedTransaction(transaction);
        onOpen();
    }

    const closeTransactionDetails = () => {
        setOpenedTransaction(undefined);
        onClose();
    }

    return (
        <Flex my={theme.space.x2} p={theme.space.x4} border={`1px solid ${theme.colors.border[colorMode]}`} borderRadius={theme.borderRadius.md} flexDir="column" gap={theme.space.x4} >
            {walletTransactions.map(transaction => (
                <Flex border={`1px solid ${theme.colors.border[colorMode]}`} color={theme.colors.text[colorMode]} p={theme.space.x3} borderRadius={theme.borderRadius.md} align="center" _hover={{ bg: theme.colors.border[colorMode], cursor: 'pointer' }} flexWrap="wrap" onClick={showTransactionDetails(transaction)}>
                    <Text width={theme.size.x3}>{transaction.merchant}</Text>
                    <Text width={theme.size.x3}>{transaction.date}</Text>
                    <Box width={theme.size.x3}>
                        {transaction.wallets.map(wallet => (
                            <Tooltip label={`${CURRENCY} ${wallet.amount}`}>
                                <Tag ml={theme.space.x1}>{wallet.name}</Tag>
                            </Tooltip>
                        ))}
                    </Box>
                    <Box width={theme.size.x1}>
                        <Tooltip label={transaction.category.name} >
                            <Avatar icon={transaction.category.icon} size="sm" bg={theme.colors.secondary[colorMode]} />
                        </Tooltip>
                    </Box>
                    <Text width={theme.size.x3}>{transaction.details}</Text>
                    <Text width={theme.size.x3}>{`${CURRENCY} ${transaction.amount}`}</Text>
                </Flex>
            ))}
            <TransactionDetailsModal
                transaction={openedTransaction}
                onClose={closeTransactionDetails}
            />
        </Flex>
    )
}

export default WalletTransactions;