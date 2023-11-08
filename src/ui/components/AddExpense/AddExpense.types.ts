import { Dayjs } from "dayjs";

export type AddExpenseForm = {
    amount: number | undefined;
    title: string | undefined;
    note: string | undefined;
    category: any | undefined;
    wallet: any | undefined;
    date: Dayjs | undefined;
}