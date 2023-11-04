import { Avatar, AvatarGroup, Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure } from "@chakra-ui/react";
import { faBowlFood, faChevronRight, faCreditCard, faDollar, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faBowlingBall } from "@fortawesome/free-solid-svg-icons/faBowlingBall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CURRENCY } from "constants/UserConfig.constants";
import { useState } from "react";
import { StyledCard } from "ui/shared";
import { WithCardWrapper } from "..";

const RecentTransactions = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const transactions = [
        {
            id: 1,
            date: "02-11-2023",
            title: 'Lunch share to ahmed',
            category: {
                id: 1,
                name: 'Lunch',
                icon: <FontAwesomeIcon icon={faBowlFood} />,
            },
            paidThroughWallet: [
                {
                    id: 'wallet-1',
                    name: 'Cash',
                    amount: 500,
                    icon: <FontAwesomeIcon icon={faDollar} />,
                },
            ],
            amount: 500,
            details: ''
        },
        {
            id: 2,
            date: "02-11-2023",
            title: 'Electricity Bill',
            category: {
                id: 2,
                name: 'Bills',
                icon: <FontAwesomeIcon icon={faReceipt} />,
            },
            paidThroughWallet: [
                {
                    id: 'wallet-2',
                    name: 'Bank Account',
                    amount: 4300,
                    icon: <FontAwesomeIcon icon={faCreditCard} />,
                },
            ],
            amount: 4300,
            details: ''
        },
        {
            id: 3,
            date: "02-11-2023",
            title: 'Cricket',
            category: {
                id: 3,
                name: 'Sports',
                icon: <FontAwesomeIcon icon={faBowlingBall} />,
            },
            paidThroughWallet: [
                {
                    id: 'wallet-1',
                    name: 'Cash',
                    amount: 700,
                    icon: <FontAwesomeIcon icon={faDollar} />,
                },
                {
                    id: 'wallet-2',
                    name: 'Bank Account',
                    amount: 500,
                    icon: <FontAwesomeIcon icon={faCreditCard} />,
                },
            ],
            amount: 1200,
            details: ''
        },
    ];
    const [openedTransaction, setOpenedTransaction] = useState<typeof transactions[0] | undefined>();

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
                    {transactions.map(transaction => (
                        // put in shadow on this flex box
                        <Flex onClick={onTransactionOpen(transaction)} key={transaction.id} justifyContent="space-between" textAlign={"start"} _hover={{ backgroundColor: 'blue.200', cursor: 'pointer' }} borderRadius={"0.5rem"} p={"0.5rem 0.75rem"}>
                            <Flex gap={4} alignItems="center">
                                <Avatar icon={transaction.category.icon} size="sm" background={"red.400"} />
                                <Box gap={2}>
                                    <Text>{transaction.title}</Text>
                                    <AvatarGroup>
                                        {transaction.paidThroughWallet.map((wallet) => (
                                            <Avatar size="xs" icon={wallet.icon} />
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
            <Modal isOpen={isOpen} onClose={onTransactionClose}>
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
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='blue'>Edit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

    )
}

export default RecentTransactions;