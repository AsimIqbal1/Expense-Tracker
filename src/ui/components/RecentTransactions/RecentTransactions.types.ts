export type Category = {
    id: number;
    name: string;
    icon: React.ReactElement;
}

export type Wallet = {
    id: number;
    name: string;
    amount: number;
    icon: React.ReactElement;
}

export type Transaction = {
    id: number;
    date: string;
    title: string;
    category: Category;
    paidThroughWallet: Wallet[];
    amount: number;
    details: string;
}