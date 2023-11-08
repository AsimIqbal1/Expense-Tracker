import React from "react";

export type CategoryExpense = {
    category: string;
    amount: number;
    icon: React.ReactElement;
    trend: number;
    difference: string;
}