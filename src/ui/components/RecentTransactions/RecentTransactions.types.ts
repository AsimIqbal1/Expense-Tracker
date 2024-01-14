export type Category = {
    id: number;
    name: string;
    icon: React.ReactElement;
}

export type Wallet = {
    id: number;
    name: string;
    amount: number;
    icon?: React.ReactElement;
}

export type Transaction = {
    id: number;
    merchant: string;
    date: string;
    category: Category;
    wallets: Wallet[];
    amount: number;
    details: string;
}