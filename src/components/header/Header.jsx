import React from 'react';
import { useDispatch } from 'react-redux'
import {
  sortProducts,
  filterProducts,
} from '../../store/slices/productSlice';
import { productFilters } from '../../appConfigs';
import './header.scss';

const Header = ({ }) => {
  const dispatch = useDispatch();
  return (
    <div className="header_container">
      <div className="header_title">Women's tops</div>
      <div className="header_actions">
        <select defaultValue="" onChange={e => dispatch(filterProducts(e.target.value.split('--')))}>
          <option value="" disabled>Filter by</option>
          {productFilters.map(filter =>
            <optgroup key={filter.type} label={filter.label}>
              {filter.values.map(f =>
                <option key={Object.keys(f)[0]} value={`${filter.type}--${Object.values(f)[0]}`}>
                  {Object.keys(f)[0]}
                </option>
              )}
            </optgroup>
          )}
          <option value="">Clear filter</option>
        </select>     
        <select defaultValue="default" onChange={e => dispatch(sortProducts(e.target.value))}>
          <option value="default" disabled>Sort by</option>
          <option value="nameAsc">Sort by Name Ascending</option>
          <option value="nameDesc">Sort by Name Descending</option>
          <option value="priceAsc">Sort by Price Ascending</option>
          <option value="priceDesc">Sort by Price Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Header;