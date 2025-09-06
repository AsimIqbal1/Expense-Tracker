import { useColorMode } from '@chakra-ui/react';
import EChart from 'echarts-for-react';
import customTheme from 'theme';
import { CURRENCY } from 'constants/UserConfig.constants';
const data = [["2025-06-05", 200], ["2025-06-06", 129], ["2025-06-07", 135], ["2025-06-08", 86], ["2025-06-09", 150], ["2025-06-10", 140], ["2025-06-11", 180], ["2025-06-12", 100], ["2025-06-13", 92], ["2025-06-14", 130], ["2025-06-15", 245], ["2025-06-16", 139], ["2025-06-17", 115], ["2025-06-18", 111], ["2025-06-19", 309], ["2025-07-21", 111], ["2025-07-22", 57], ["2025-07-23", 55], ["2025-07-24", 60]];

const dateList = data.map(function (item) {
    return item[0];
});
const valueList = data.map(function (item) {
    return item[1];
});

const ExpenseTrend = () => {
    const { colorMode } = useColorMode();

    let option = {

        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                data: dateList,
            }
        ],
        yAxis: [
            {
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                type: 'line',
                showSymbol: false,
                data: valueList,
                smooth: true,
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: customTheme.colors.secondary[colorMode]   // color at 0% position
                        }, {
                            offset: 1, color: customTheme.colors.primary[colorMode]  // color at 100% position
                        }],
                    },
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name: 'Max',
                            symbolSize: '80',
                            itemStyle: {
                                color: customTheme.colors.secondary[colorMode],
                            },
                        },
                        {
                            type: 'min',
                            name: 'Min',
                            symbolSize: '80',

                            itemStyle: {
                                color: customTheme.colors.primary[colorMode],
                            },
                        }
                    ],

                    itemStyle: {
                        width: '40px',
                        height: '40px'
                    },
                    label: {
                        color: customTheme.colors.text.dark,
                        fontFamily: customTheme.fonts.bold,
                        fontSize: customTheme.fontSizes.sm,
                        formatter: function (params: any) {
                            // Append unit along with max and min values
                            return `${CURRENCY}${params.value}`;
                        },
                    }
                },
            }
        ]
    };
    return (<EChart option={option} style={{ height: "400px" }} />)
}

export default ExpenseTrend;