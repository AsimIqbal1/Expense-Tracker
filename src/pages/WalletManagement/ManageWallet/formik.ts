import * as Yup from 'yup';

export const MANAGE_WALLET_FORMIK = {
    initialValues: {
        name: undefined as unknown as string,
        amount: undefined as unknown as number,
    },
    validationSchema: Yup.object().shape({

        name: Yup.string().required('Wallet name can\'t be empty'),
        amount: Yup.number().
            typeError('Amount must be in numbers format')
            .required('Amount can\'t be empty'),
    })
}