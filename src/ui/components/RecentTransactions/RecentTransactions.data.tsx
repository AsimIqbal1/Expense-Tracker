import { faBowlFood, faDollar, faReceipt, faCreditCard, faBowlingBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transactions } from ".";

export const TRANSACTIONS: Transactions[] = [
    {
        id: 1,
        date: "02-11-2023",
        title: 'Lunch share to ahmed',
        category: {
            id: 1,
            name: 'Lunch',
            icon: <FontAwesomeIcon icon={faBowlFood} />,
        },
        paidThroughWallet: [
            {
                id: 1,
                name: 'Cash',
                amount: 500,
                icon: <FontAwesomeIcon icon={faDollar} />,
            },
        ],
        amount: 500,
        details: ''
    },
    {
        id: 2,
        date: "02-11-2023",
        title: 'Electricity Bill',
        category: {
            id: 2,
            name: 'Bills',
            icon: <FontAwesomeIcon icon={faReceipt} />,
        },
        paidThroughWallet: [
            {
                id: 2,
                name: 'Bank Account',
                amount: 4300,
                icon: <FontAwesomeIcon icon={faCreditCard} />,
            },
        ],
        amount: 4300,
        details: ''
    },
    {
        id: 3,
        date: "02-11-2023",
        title: 'Cricket',
        category: {
            id: 3,
            name: 'Sports',
            icon: <FontAwesomeIcon icon={faBowlingBall} />,
        },
        paidThroughWallet: [
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
        details: ''
    },
]