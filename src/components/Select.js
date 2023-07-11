import React, { useState } from 'react';
import { styled } from 'styled-components';

function Select() {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
   
         <div className='ER'>
    <h1>Select</h1>
   
    <div style={{ display: 'flex', flexDirection: 'row', padding: '10px', gap: '30px' }}>
      <div>
        {/* <label>카테고리</label> */}
        <StyledSelect value={category} onChange={handleCategoryChange}>
          <option value="">선택하세요</option>
          <option value="electronics">전자제품</option>
          <option value="clothing">의류</option>
          <option value="books">도서</option>
        </StyledSelect>
      </div>
      <div>
        {/* <label>색상</label> */}
        <StyledSelect value={color} onChange={handleColorChange}>
          <option value="">선택하세요</option>
          <option value="red">빨강</option>
          <option value="blue">파랑</option>
          <option value="green">초록</option>
        </StyledSelect>
      </div>
     
    </div>
    </div>
  );
}

const StyledSelect = styled.select`
  height: 40px;
  width: 200px;
  border: 1px solid black;
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
