import EChart from 'echarts-for-react';
import { IIncomeExpenseTrendProps } from "./IncomeExpenseTrend.types";
import { useColorMode } from '@chakra-ui/react';
import theme from 'theme';
import { beautifyNumber } from 'utils/numberFormatters';
import { CURRENCY } from 'constants/UserConfig.constants';
import './IncomeExpenseTrend.scss';

const IncomeExpenseTrend = (props: IIncomeExpenseTrendProps) => {
    const { data } = props;

    const dateList = data.map(function (item) {
        return item.date;
    });
    const expenses = data.map(function (item) {
        return item.commulativeExpense;
    });
    const incomes = data.map(function (item) {
        return item.commulativeIncome;
    });

    const { colorMode } = useColorMode();
    let option = {
        grid: {
            left: 0,
            right: 0,
            bottom: '10%',
            top: '10%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params: any) => (
                `<div class='income-expense-trend-tooltip'>
                    ${params[0].axisValueLabel}
                    <div class='flex'>
                        <div class='bg-income indicator'></div>
                        ${params[0].seriesName}
                        ${CURRENCY}${beautifyNumber(params[0].value)}
                    </div>
                    <div class='flex'>
                        <div class='bg-expense indicator'></div>
                        ${params[1].seriesName}
                        ${CURRENCY}${beautifyNumber(params[1].value)}
                    </div>
                </div>`
            ),
        },
        xAxis: {
            boundaryGap: false,
            // axisLabel: { show: false },
            data: dateList,
        },
        yAxis: {
            show: false,
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: 'Income',
                type: 'line',
                showSymbol: false,
                data: incomes,
                lineStyle: {
                    color: theme.colors.transparent[colorMode]
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0, color: theme.colors.primary[colorMode]  // color at 0% position
                            },
                            {
                                offset: 1, color: theme.colors.background[colorMode] // color at 100% position
                            },
                        ],
                    },
                }
            },
            {
                name: 'Expense',
                type: 'line',
                showSymbol: false,
                data: expenses,
                lineStyle: {
                    color: theme.colors.transparent[colorMode]
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0, color: theme.colors.secondary[colorMode]  // color at 0% position
                            },
                            {
                                offset: 1, color: theme.colors.background[colorMode] // color at 100% position
                            },
                        ],
                    },
                }
            }
        ]
    };
    return (
        <EChart className='income-expense-trend-chart' option={option} />
    )
}

export default IncomeExpenseTrend;