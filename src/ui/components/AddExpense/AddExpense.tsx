import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    IconButton,
    // IconButton,
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
    Textarea,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react";
// import { faAdd } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FieldProps, Formik } from "formik";
import { ADD_EXPENSE_FORMIK } from "./formik";
import { CreatableSelect } from "ui/shared/ReactSelect";
import theme from "theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const AddExpense = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();

    const onAddWalletRequest = (
        state: any,
        formikSetter: (fieldName: string, newValue: any) => void,
    ) => {
        state.push([]);
        formikSetter("wallet", state);
    }

    const handleWalletContributionChange = (
        changeValue: any,
        state: any,
        fieldName: string,
        index: number,
        formikSetter: (fieldName: string, newValue: any) => void,
        isDelete: boolean = false
    ) => {
        if (isDelete) {
            state.splice(index, 1);
        } else {
            state[index] = {
                ...state[index],
                [fieldName]: changeValue
            };
        }

        console.log(state);
        formikSetter("wallet", state);
    }

    return (
        <>
            <Button colorScheme="blue" onClick={onOpen}>Add Expense</Button>

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
                    {({ handleSubmit, errors, touched, setFieldValue, values }) => (
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
                                        <Field name="amount">
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

                                    <FormControl isInvalid={!!errors.date} mt={"0.5rem"}>
                                        <FormLabel>Date</FormLabel>
                                        <Field as={Input} name={"date"} type="date" />
                                        {errors.date && <FormErrorMessage>{errors.date}</FormErrorMessage>}
                                    </FormControl>

                                    <FormControl isInvalid={!!errors.wallet} mt={"0.6rem"}  >
                                        <FormLabel mb={0}>{"Payment mode"}</FormLabel>
                                        <Flex flexDirection={"column"} gap={theme.space.x2} p={theme.space.x4} border={`1px solid ${theme.colors.border[colorMode]}`} borderRadius={theme.borderRadius.md}>
                                            {values.wallet.map((value: any, index) => (
                                                <Flex key={index} gap={theme.space.x3} flexWrap={"wrap"}>

                                                    <Flex flex={2} flexDirection={"column"}>
                                                        <FormLabel fontSize={"sm"}>Wallet</FormLabel>
                                                        <Field name={`wallet`}>
                                                            {({ field }: FieldProps) => (
                                                                <CreatableSelect
                                                                    {...field}
                                                                    value={value.wallet}
                                                                    options={[
                                                                        {
                                                                            value: '1',
                                                                            label: 'option 1',
                                                                        },
                                                                        {
                                                                            value: '2',
                                                                            label: 'option 2',
                                                                        },
                                                                        {
                                                                            value: '3',
                                                                            label: 'option 3',
                                                                        },
                                                                        {
                                                                            value: '4',
                                                                            label: 'option 4',
                                                                        },
                                                                        {
                                                                            value: '5',
                                                                            label: 'option 5',
                                                                        },
                                                                    ]}
                                                                    onChange={
                                                                        (changedValue) =>
                                                                            handleWalletContributionChange(
                                                                                changedValue,
                                                                                field.value,
                                                                                "wallet",
                                                                                index,
                                                                                setFieldValue
                                                                            )}
                                                                />
                                                            )}
                                                        </Field>
                                                    </Flex>
                                                    <Flex gap={theme.space.x2} flex={2}>
                                                        <Box>
                                                            <FormLabel fontSize={"sm"}>Amount</FormLabel>
                                                            <Field name={`wallet`}>
                                                                {({ field }: FieldProps) => (
                                                                    <NumberInput>
                                                                        <NumberInputField
                                                                            {...field}
                                                                            value={Number(value.amount)}
                                                                            onChange={
                                                                                (e) => {
                                                                                    console.log("field: ", field)
                                                                                    handleWalletContributionChange(
                                                                                        e.target.value,
                                                                                        field.value,
                                                                                        "amount",
                                                                                        index,
                                                                                        setFieldValue
                                                                                    )
                                                                                }
                                                                            } />
                                                                    </NumberInput>
                                                                )}
                                                            </Field>
                                                        </Box>

                                                        <IconButton
                                                            icon={<FontAwesomeIcon icon={faTrashCan} />}
                                                            aria-label={"add expense"}
                                                            variant="outline"
                                                            isRound
                                                            size="sm"
                                                            colorScheme={'red'}
                                                            alignSelf={"flex-end"}
                                                            mb={"4px"}
                                                            onClick={() => handleWalletContributionChange(undefined, values.wallet, "", index, setFieldValue, true)}
                                                        />
                                                    </Flex>
                                                </Flex>
                                            ))}
                                            <Button
                                                variant={"outline"}
                                                colorScheme="blue"
                                                width={"100%"}
                                                onClick={() => onAddWalletRequest(values.wallet, setFieldValue)}
                                            > Attach{values.wallet.length > 0 ? " another" : ""} wallet</Button>
                                        </Flex>

                                    </FormControl>
                                    <FormControl isInvalid={!!errors.note} mt={"0.5rem"}>
                                        <FormLabel>Notes</FormLabel>
                                        <Field as={Textarea} name="notes" />
                                        {errors.note && <FormHelperText>{errors.note}</FormHelperText>}
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