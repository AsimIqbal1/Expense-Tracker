import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField,
    useDisclosure
} from "@chakra-ui/react";
import { Formik, Field, FieldProps } from "formik";
import { StyledButton } from "ui/shared";
import { ADD_WALLET_FORMIK } from "./formik";

const WalletManagement = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleWalletAddition = (values: any) => {
        console.log("submitted: ", values)
    }

    return (
        <>
            <StyledButton variant={"outline"} onClick={onOpen}>Create Wallet</StyledButton>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <Formik
                    initialValues={ADD_WALLET_FORMIK.initialValues}
                    validationSchema={ADD_WALLET_FORMIK.validationSchema}
                    onSubmit={handleWalletAddition}
                >
                    {({ handleChange, handleSubmit, errors, touched }) => (

                        <form onSubmit={handleSubmit}>
                            <ModalContent>
                                <ModalHeader>Add Wallet</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <FormControl isRequired isInvalid={!!errors.name && touched.name}>
                                        <FormLabel>Name</FormLabel>
                                        <Field as={Input} onChange={handleChange} name="name" />
                                        {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                                    </FormControl>

                                    {/* AMOUNT FIELD */}
                                    <FormControl isRequired isInvalid={!!errors.amount && touched.amount}>
                                        <FormLabel>Amount</FormLabel>
                                        <Field name="amount">
                                            {({ field }: FieldProps) => (
                                                <NumberInput>
                                                    <NumberInputField {...field} onChange={field.onChange} />
                                                </NumberInput>
                                            )}
                                        </Field>
                                        {errors.amount && <FormErrorMessage>{errors.amount}</FormErrorMessage>}
                                    </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                    <StyledButton type="submit">Add</StyledButton>
                                </ModalFooter>
                            </ModalContent>
                        </form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default WalletManagement;