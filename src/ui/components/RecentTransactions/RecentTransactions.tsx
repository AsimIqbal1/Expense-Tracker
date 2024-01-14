import { Avatar, AvatarGroup, Box, Flex, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CURRENCY } from "constants/UserConfig.constants";
import { useState } from "react";
import { StyledCard } from "ui/shared";
import { TransactionDetailsModal, Transaction, WithCardWrapper } from "ui/components";
import { TRANSACTIONS } from "./RecentTransactions.data";
import theme from "theme";
const RecentTransactions = () => {

    const { onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    const [openedTransaction, setOpenedTransaction] = useState<Transaction>();

    const onTransactionOpen = (transaction: Transaction) => () => {
        setOpenedTransaction(transaction);
        onOpen();
    }

    const onTransactionClose = () => {
        setOpenedTransaction(undefined);
        onClose();
    }

    return (
        <>
            <StyledCard title="Recent Transactions">
                <WithCardWrapper>
                    {TRANSACTIONS.map(transaction => (
                        // put in shadow on this flex box
                        <Flex onClick={onTransactionOpen(transaction)} key={transaction.id} justifyContent="space-between" textAlign={"start"} _hover={{ bg: theme.colors.border[colorMode], cursor: 'pointer' }} borderRadius={"0.5rem"} p={"0.5rem 0.75rem"}>
                            <Flex gap={4} alignItems="center">
                                <Avatar icon={transaction.category.icon} size="sm" background={"red.400"} />
                                <Box gap={2}>
                                    <Text>{transaction.merchant}</Text>
                                    <AvatarGroup>
                                        {transaction.wallets.map((wallet) => (
                                            <Avatar key={wallet.id} size="xs" icon={wallet.icon} />
                                        ))}
                                    </AvatarGroup>
                                    <Text color="gray" fontSize="sm" mt="0.5rem">{transaction.date}</Text>
                                </Box>
                            </Flex>

                            <Flex alignItems="center" gap={2}>
                                <Text fontSize="lg">{CURRENCY}{transaction.amount}</Text>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Flex>
                        </Flex>
                    ))}
                </WithCardWrapper>
            </StyledCard>

            <TransactionDetailsModal
                onClose={onTransactionClose}
                transaction={openedTransaction}
            />

        </>

    )
}

export default RecentTransactions;