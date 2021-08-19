export const column1 = [
    {
        id: 1,
        title: '销售任务',
        field: 'data1',
        width: 0,
        inputType: 'read'
    }, {
        id: 2,
        title: '月份销售额',
        field: 'data2',
        width: 0,
        inputType: 'read',
        children: [
            {
                id: 3,
                title: '1月销售额',
                field: 'sales1',
                width: 0,
                inputType: 'read',
            },
            {
                id: 4,
                title: '2月销售额',
                field: 'sales2',
                width: 0,
                inputType: 'read',
            },
            {
                id: 5,
                title: '3月销售额',
                field: 'sales3',
                width: 0,
                inputType: 'read',
            }
        ]
    },
    {
        id: 7,
        title: '增长率',
        field: '',
        width: 0,
        inputType: 'read',
        children: [
            {
                id: 8,
                title: '1季度',
                field: '',
                width: 0,
                inputType: 'read',
                children: [
                    {
                        id: 9,
                        title: '1月',
                        field: 'month1SalesGrowthRatio',
                        width: 0,
                        inputType: 'read',
                    },
                    {
                        id: 10,
                        title: '2月',
                        field: 'month2SalesGrowthRatio',
                        width: 0,
                        inputType: 'read',
                    },
                    {
                        id: 11,
                        title: '3月',
                        field: 'month3SalesGrowthRatio',
                        width: 0,
                        inputType: 'read',
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        title: '销售目标预测',
        field: '',
        width: 0,
        inputType: 'read',
        children:[
            {
                id: 13,
                title: '1月',
                field: 'predictMonth1',
                width: 0,
                inputType: 'edit',
            },
        ]
    }
]