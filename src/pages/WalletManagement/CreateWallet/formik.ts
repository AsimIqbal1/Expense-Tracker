import * as Yup from 'yup';

export const ADD_WALLET_FORMIK = {
    initialValues: {
        name: undefined,
        amount: undefined,
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name can\'t be empty'),
        amount: Yup.number()
            .typeError('Amount must be in numbers format')
            .required('Amount can\'t be empty'),
    })
}