import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
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
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FieldProps, Formik } from "formik";
import { ADD_EXPENSE_FORMIK } from "./formik";

const AddExpense = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log("test")
    return (
        <>
            <Flex justifyContent="flex-end" pb="1rem">
                <IconButton
                    icon={<FontAwesomeIcon icon={faAdd} />}
                    aria-label={"add expense"}
                    variant="outline"
                    isRound
                    size="lg"
                    colorScheme='blue'
                    onClick={onOpen}
                />
            </Flex>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <Formik
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

                                    {/* Paid to.., notes, category, wallet used, date, icon remaining */}

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
                </Formik>
            </Modal>
        </>
    )
}

export default AddExpense;