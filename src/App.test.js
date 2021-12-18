/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App.jsx';


afterEach(cleanup);

const dummyProductData = [
    {
        "index": 0,
        "isSale": true,
        "isExclusive": false,
        "price": "$18.88",
        "productImage": "product-1.jpg",
        "productName": "Striped shirt",
        "size": ["XS", "S", "L", "XL"]
    },
    {
        "index": 1,
        "isSale": false,
        "isExclusive": false,
        "price": "$25.44",
        "productImage": "product-2.jpg",
        "productName": "Denim shirt",
        "size": ["XS", "S"]
    }
];

global.fetch = jest.fn(() => Promise.resolve(dummyProductData));

describe('Test App.jsx', () => {
    test('should render header title', () => {
        const { getByText } = render(<Provider store={store}><App /></Provider>);
        expect(getByText("Women's tops")).toBeInTheDocument();
    })
});