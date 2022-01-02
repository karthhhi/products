import { createSlice } from '@reduxjs/toolkit';
import getAllProducts from '../../utils/getAllProducts';
import { 
  productFilters,
  productSort
} from '../../appConfigs';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    filteredList: [],
    filteredType: '',
    sortedType: ''
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
      state.filteredList = action.payload;
    },
    sortProducts: (state, action) => {
      const sortBy = action.payload;
      state.sortedType = `Sorted by ${productSort.find(s=> s.value === sortBy)['label']}`;
      switch(sortBy) {
        case 'nameAsc':
          state.filteredList = [...state.filteredList].sort((a,b) => (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0));
          break;
        case 'nameDesc':
          state.filteredList = [...state.filteredList].sort((a,b) => (a.productName < b.productName) ? 1 : ((b.productName < a.productName) ? -1 : 0));
          break;
        case 'priceAsc':
          state.filteredList = [...state.filteredList].sort((a,b) => Number(a.price.replace(/[^0-9\.]+/g,"")) - Number(b.price.replace(/[^0-9\.]+/g,"")));
          break;
        case 'priceDesc':
          state.filteredList = [...state.filteredList].sort((a,b) => Number(b.price.replace(/[^0-9\.]+/g,"")) - Number(a.price.replace(/[^0-9\.]+/g,"")));
          break;
        default:
          state.filteredList = [...state.list];
      }
    },
    filterProducts: (state, action) => {
      const [type, value] = action.payload;
      const selectedFilter = productFilters.find(v => v.type === type);
      state.sortedType = '';
      if(selectedFilter) {
        const {apiKey, values} = selectedFilter;
        state.filteredList = state.list.filter((product) => {
          if(Array.isArray(product[apiKey])) {
            return product[apiKey].indexOf(value) !== -1;
          } else {
            return product[apiKey].toString() === value;
          }
        });
        state.filteredType = `Filtered by ${type}: ${Object.keys(values.find(v => Object.values(v)[0].toString() === value))[0]}`; 
      } else {
        state.filteredList = state.list;
        state.filteredType = '';
      }
    }
  }
});

// Actions
export const { 
    setProducts, 
    sortProducts,
    filterProducts
} = productSlice.actions;

// Selectors
export const getProducts = (state) => state.products.filteredList || [];
export const getFilteredType = (state) => state.products.filteredType || '';
export const getSortedType = (state) => state.products.sortedType || '';

// Default export reducer
export default productSlice.reducer;
