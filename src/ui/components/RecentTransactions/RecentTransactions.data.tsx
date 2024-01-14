import { faBowlFood, faDollar, faReceipt, faCreditCard, faBowlingBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transaction } from "./RecentTransactions.types";

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        date: "02-11-2023",
        merchant: 'Daraz.pk karachi pk',
        details: 'Lunch share to ahmed',
        category: {
            id: 1,
            name: 'Lunch',
            icon: <FontAwesomeIcon icon={faBowlFood} />,
        },
        wallets: [
            {
                id: 1,
                name: 'Cash',
                amount: 500,
                icon: <FontAwesomeIcon icon={faDollar} />,
            },
        ],
        amount: 500,
    },
    {
        id: 2,
        date: "02-11-2023",
        merchant: 'Daraz.pk karachi pk',
        details: 'Electricity Bill',
        category: {
            id: 2,
            name: 'Bills',
            icon: <FontAwesomeIcon icon={faReceipt} />,
        },
        wallets: [
            {
                id: 2,
                name: 'Bank Account',
                amount: 4300,
                icon: <FontAwesomeIcon icon={faCreditCard} />,
            },
        ],
        amount: 4300,
    },
    {
        id: 3,
        date: "02-11-2023",
        merchant: 'Daraz.pk karachi pk',
        details: 'Cricket',
        category: {
            id: 3,
            name: 'Sports',
            icon: <FontAwesomeIcon icon={faBowlingBall} />,
        },
        wallets: [
            {
                id: 1,
                name: 'Cash',
                amount: 700,
                icon: <FontAwesomeIcon icon={faDollar} />,
            },
            {
                id: 2,
                name: 'Bank Account',
                amount: 500,
                icon: <FontAwesomeIcon icon={faCreditCard} />,
            },
        ],
        amount: 1200,
    },
]