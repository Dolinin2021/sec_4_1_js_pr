import statusCheck from '../app';
test.each([
    {data: {name: 'Маг', health: 90}, expected: 'healthy'},
    {data: {name: 'Воин', health: 40}, expected: 'wounded'},
    {data: {name: 'Лучник', health: 10}, expected: 'critical'},
])('status check %s', ({data, expected}) => {
    let result = statusCheck(data);
    expect(result).toBe(expected);
});