export const productFilters = [
    {
        type: 'size',
        label: 'Filter by size',
        values: [{'XS': 'XS'}, {'S': 'S'}, {'M':'M'}, {'L': 'L'}, {'XL': 'XL'}],
        apiKey: 'size'
    },
    {
        type: 'exclusive',
        label: 'Filter by exclusive',
        values: [{'Yes': true}, {'No': false}],
        apiKey: 'isExclusive'
    },
    {
        type: 'sale',
        label: 'Filter by sale',
        values: [{'Yes': true}, {'No': false}],
        apiKey: 'isSale'
    }
];

export const productListApiUrl = 'https://api.jsonbin.io/b/5e9fc4a82940c704e1dc7893';