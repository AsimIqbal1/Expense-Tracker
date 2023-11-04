import React from "react";

export type Expense = {
    category: string;
    amount: number;
    icon: React.ReactElement;
    trend: number;
    difference: string;
}