import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    ModalFooter,
    useDisclosure,
    useColorMode
} from "@chakra-ui/react";
import { Formik, Field, FieldProps } from "formik";
import { BasicSelect, StyledButton } from "ui/shared";
import { IManageWalletProps } from "./ManageWallet.types";
import { MANAGE_WALLET_FORMIK } from "./formik";
import theme from 'theme';
import { Wallet } from "pages/WalletManagement";

const ManageWallet = (props: IManageWalletProps) => {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { wallets } = props;

    const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>();

    const handleWalletDetailUpdateSubmit = (values: any) => {
        console.log("Wallet update details: ", values);
        onClose();
    }

    const onWalletChange = (wallet: { id: number, name: string }, formikSetter: (fieldName: string, newValue: any) => void) => {
        setSelectedWallet(wallet);
        formikSetter("name", wallet.name);
        formikSetter("amount", Math.floor(Math.random() * 100000))
    }

    return (
        <>
            {/* <Flex h="100vh" justifyContent="center" alignItems="center" > */}
            <StyledButton variant={"outline"} onClick={onOpen}>Manage Wallet</StyledButton>
            {/* </Flex> */}
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <Formik
                    initialValues={MANAGE_WALLET_FORMIK.initialValues}
                    validationSchema={MANAGE_WALLET_FORMIK.validationSchema}
                    onSubmit={handleWalletDetailUpdateSubmit}
                >
                    {({ handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalContent>
                                <ModalHeader>Manage Wallet</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <FormLabel>Wallet to update</FormLabel>
                                    <Field
                                        as={BasicSelect}
                                        value={selectedWallet}
                                        options={wallets}
                                        getOptionLabel={(option: any) => option.name}
                                        onChange={(changeValue: any) => onWalletChange(changeValue, setFieldValue)}
                                    />
                                    <FormControl isRequired isInvalid={!!errors.name && touched.name} mt={theme.space.x2}>
                                        <FormLabel>Name</FormLabel>
                                        <Field
                                            as={Input}
                                            disabled={!selectedWallet}
                                            onChange={handleChange}
                                            name="name"
                                        />
                                        {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                                    </FormControl>

                                    {/* AMOUNT FIELD */}
                                    <FormControl isRequired isInvalid={!!errors.amount && touched.amount} mt={theme.space.x2}>
                                        <FormLabel>Amount</FormLabel>
                                        <Field name="amount" >
                                            {({ field }: FieldProps) => (
                                                <NumberInput value={field.value}>
                                                    <NumberInputField
                                                        {...field}
                                                        disabled={!selectedWallet}
                                                        onChange={field.onChange}
                                                    />
                                                </NumberInput>
                                            )}
                                        </Field>
                                        {errors.amount && <FormErrorMessage>{errors.amount}</FormErrorMessage>}
                                    </FormControl>
                                </ModalBody>
                                <ModalFooter gap={theme.space.x2} justifyContent="space-between">
                                    {/* TODO: Introduce a confirmation modal when a delete is clicked */}
                                    <StyledButton
                                        border={`1px solid ${theme.colors.error[colorMode]}`}
                                        color={theme.colors.error[colorMode]}
                                        variant="outline"
                                    >
                                        Delete
                                    </StyledButton>
                                    <StyledButton type="submit">Update</StyledButton>
                                </ModalFooter>
                            </ModalContent>
                        </form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default ManageWallet;