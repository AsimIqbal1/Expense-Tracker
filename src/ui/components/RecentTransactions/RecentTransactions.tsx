import { Avatar, AvatarGroup, Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CURRENCY } from "constants/UserConfig.constants";
import { useState } from "react";
import { StyledCard } from "ui/shared";
import { Transactions, WithCardWrapper } from "..";
import { TRANSACTIONS } from "./RecentTransactions.data";
import { StyledButton } from "ui/shared";
import customTheme from "theme";

const RecentTransactions = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    const [openedTransaction, setOpenedTransaction] = useState<Transactions>();

    const onTransactionOpen = (transaction: any) => () => {
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
                        <Flex onClick={onTransactionOpen(transaction)} key={transaction.id} justifyContent="space-between" textAlign={"start"} _hover={{ bgGradient: `linear(to-r, primary.${colorMode}, secondary.${colorMode})`, cursor: 'pointer' }} borderRadius={"0.5rem"} p={"0.5rem 0.75rem"}>
                            <Flex gap={4} alignItems="center">
                                <Avatar icon={transaction.category.icon} size="sm" background={"red.400"} />
                                <Box gap={2}>
                                    <Text>{transaction.title}</Text>
                                    <AvatarGroup>
                                        {transaction.paidThroughWallet.map((wallet) => (
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
            <Modal isCentered isOpen={isOpen} onClose={onTransactionClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Transaction Details</ModalHeader>
                    <ModalCloseButton />
                    {openedTransaction && <ModalBody maxH={"20rem"} overflow={"scroll"}>
                        <Flex flexDir={"column"} gap={6} >
                            <TableContainer>
                                <Table variant="unstyled">
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Title</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.title || '-'}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Date</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.date || '-'}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Amount paid</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.amount || '-'}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Category</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.category.name || '-'}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Details</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.details || '-'}</Text>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Text color="gray">Wallet used</Text>
                                            </Td>
                                            <Td>
                                                <Text>{openedTransaction.paidThroughWallet.map(wallet => wallet.name).join(', ')}</Text>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            {/* <span>

                            </span>
                            <span>
                                <Text color="gray">Amount paid</Text>
                                <Text ml={"6rem"}>{openedTransaction.amount}</Text>
                            </span>
                            <span>
                                <Text color="gray">Category</Text>
                                <Text ml={"6rem"}>{openedTransaction.category.name}</Text>
                            </span>
                            <span>
                                <Text color="gray">Details</Text>
                                <Text ml={"6rem"}>{openedTransaction.details}</Text>
                            </span>
                            <span>
                                <Text color="gray">Wallet used</Text>
                                <Text ml={"6rem"}>{openedTransaction.paidThroughWallet.map(wallet => wallet.name).join(' ,')}</Text>
                            </span> */}
                        </Flex>
                    </ModalBody>}

                    <ModalFooter>
                        <StyledButton variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </StyledButton>
                        <StyledButton colorScheme='blue'>Edit</StyledButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

    )
}

export default RecentTransactions;