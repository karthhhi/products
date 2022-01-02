import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  sortProducts,
  filterProducts,
  getFilteredType,
  getSortedType
} from '../../store/slices/productSlice';
import { 
  productFilters, 
  productSort
} from '../../appConfigs';
import './header.scss';

const Header = ({ }) => {
  const dispatch = useDispatch();
  const filteredType = useSelector(getFilteredType);
  const sortedType = useSelector(getSortedType);
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  return (
    <div className="header_container">
      <div className="header_title"><a href="/">Women's tops</a></div>
      <div className="header_actions">
        <select 
          defaultValue="" 
          value={filterValue}
          onChange={e => {
            setFilterValue(e.target.value);
            setSortValue('');
            dispatch(filterProducts(e.target.value.split('--')));
          }}>
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
        </select>     
        <select 
          defaultValue="" 
          value={sortValue}
          onChange={e => {
            setSortValue(e.target.value);
            dispatch(sortProducts(e.target.value));
          }}
        >
          <option value="" disabled>Sort by</option>
          {productSort.map(s => <option value={s.value}>{s.label}</option>)}
        </select>
        { (filteredType || sortedType)  &&
          <div className="header_filter-info">
            <div>{filteredType}</div>
            <div>{sortedType}</div>
            <button 
              onClick={() => {
                setFilterValue('');
                setSortValue('');
                dispatch(filterProducts([]))
              }}
            >
              X
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;