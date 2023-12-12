import { CURRENCY } from "constants/UserConfig.constants";

export const beautifyNumber = (number: number) => {
    // Check if the number has decimal places
    const hasDecimals = number % 1 !== 0;

    // Use different formatting based on whether there are decimals or not
    if (hasDecimals) {
        return number.toLocaleString('en-US', { style: 'currency', currency: CURRENCY });
    } else {
        return number.toLocaleString('en-US');
    }
};