import * as Yup from 'yup';

export const ADD_EXPENSE_FORMIK = {
    initialValues: {
        amount: undefined,
        title: undefined,
        category: undefined,
        wallet: [],
        date: undefined,
        note: undefined
    },
    validationSchema: Yup.object().shape({
        amount: Yup.number()
            .typeError('Amount must be in numbers format')
            .required('Amount can\'t be empty'),
        title: Yup.string()
            .required('Title can\'t be empty'),

    }),

}

