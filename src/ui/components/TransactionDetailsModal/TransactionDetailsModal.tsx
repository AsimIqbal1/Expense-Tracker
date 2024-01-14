import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, TableContainer, Table, Tbody, Tr, Td, ModalFooter, Text } from "@chakra-ui/react"
import { StyledButton } from "ui/shared"
import { Transaction } from "../RecentTransactions";

export interface ITransactionDetailsModal {
    transaction?: Transaction;
    onClose: () => void;
}

const TransactionDetailsModal = (props: ITransactionDetailsModal) => {
    const { onClose, transaction } = props;
    return (
        <Modal isCentered isOpen={!!transaction} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Transaction Details</ModalHeader>
                <ModalCloseButton />
                {transaction && <ModalBody maxH={"20rem"} overflow={"scroll"}>
                    <Flex flexDir={"column"} gap={6} >
                        <TableContainer>
                            <Table variant="unstyled">
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Merchant</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.merchant || '-'}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Date</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.date || '-'}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Amount paid</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.amount || '-'}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Category</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.category.name || '-'}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Details</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.details || '-'}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text color="gray">Wallet used</Text>
                                        </Td>
                                        <Td>
                                            <Text>{transaction.wallets.map(wallet => wallet.name).join(', ')}</Text>
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
    )
}

export default TransactionDetailsModal;