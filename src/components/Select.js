import React, { useState } from 'react';
import { styled } from 'styled-components';

function Select() {
  const [category, setCategory] = useState('');
  const [category2, setCategory2] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCategoryChange2 = (event) => {
    setCategory2(event.target.value);
  };

  return (
   
         <div style={{border: '3px solid rgb(221, 221, 221)',
          height: '200px',
          overflow: 'hidden',
          position: 'relative',
          marginTop : '50px'
         
          }}>
    <h1>Select</h1>
   
    <div style={{ display: 'flex', gap: '10px' }}>
      <div>
        {/* <label>카테고리</label> */}
        <StyledSelect value={category} onChange={handleCategoryChange}>
        <option value="">리액트</option>
          <option value="">자바</option>
          <option value="">스프링</option>
          <option value="">리액트 네이티브</option>
        </StyledSelect>
      </div>
      <div>
        {/* <label>색상</label> */}
        <StyledSelect value={category2} onChange={handleCategoryChange2}>
          <option value="">리액트</option>
          <option value="">자바</option>
          <option value="">스프링</option>
          <option value="">리액트 네이티브</option>
        </StyledSelect>
      </div>
     
    </div>
    </div>
  );
}

const StyledSelect = styled.select`
  height: 40px;
  width: 200px;
  border: 1px solid gray;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const ER = styled.div`
   border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
    `;

export default Select;
