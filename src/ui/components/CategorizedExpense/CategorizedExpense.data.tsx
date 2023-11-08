import { faUtensils, faCar, faReceipt, faBaseball, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryExpense } from ".";

export const EXPENSES: CategoryExpense[] = [
    {
        category: 'Food',
        amount: 3600,
        icon: <FontAwesomeIcon icon={faUtensils} />,
        trend: 1,
        difference: '3%'
    },
    {
        category: 'Travel',
        amount: 5400,
        icon: <FontAwesomeIcon icon={faCar} />,
        trend: -1,
        difference: '3%'
    },
    {
        category: 'Bills',
        amount: 14302,
        icon: <FontAwesomeIcon icon={faReceipt} />,
        trend: 1,
        difference: '2%'
    },
    {
        category: 'Sports',
        amount: 2000,
        icon: <FontAwesomeIcon icon={faBaseball} />,
        trend: 1,
        difference: '6%'
    },
    {
        category: 'Others',
        amount: 12300,
        icon: <FontAwesomeIcon icon={faEllipsis} />,
        trend: -1,
        difference: '9%'
    }
];