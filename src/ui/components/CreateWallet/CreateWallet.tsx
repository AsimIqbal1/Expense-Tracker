import { FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberInput, NumberInputField, useDisclosure } from "@chakra-ui/react";
import { Formik, Field, FieldProps } from "formik";
import { StyledButton } from "ui/shared";

const CreateWallet = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <StyledButton>Create Wallet</StyledButton>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                {/* <Formik
                    initialValues={ADD_EXPENSE_FORMIK.initialValues}
                    validationSchema={ADD_EXPENSE_FORMIK.validationSchema}
                    onSubmit={(values) => {
                        console.log("SDDD: ", values)
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalContent>
                                <ModalHeader>Add new expense</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <FormControl isRequired isInvalid={!!errors.title && touched.title}>
                                        <FormLabel>Title</FormLabel>
                                        <Field as={Input} name="title" />
                                        {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.amount && touched.amount} mt={"0.5rem"}>
                                        <FormLabel>Amount</FormLabel>
                                        <Field name="amount"  >
                                            {({ field }: FieldProps) => (
                                                <NumberInput>
                                                    <NumberInputField
                                                        {...field}
                                                        onChange={field.onChange} />
                                                </NumberInput>
                                            )}

                                        </Field>
                                        {errors.amount && <FormErrorMessage>{errors.amount}</FormErrorMessage>}
                                    </FormControl>


                                </ModalBody>

                                <ModalFooter>
                                    <Button variant='ghost' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='blue' type="submit">Add</Button>
                                </ModalFooter>
                            </ModalContent>
                        </form>
                    )}
                </Formik> */}
            </Modal>
        </>
    )
}

export default CreateWallet;