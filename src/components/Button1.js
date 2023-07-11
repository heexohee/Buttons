import React from 'react';
import styled from 'styled-components';


function handleClick() {
  alert('버튼을 만들어 보세요.');
}

function Button1() {
  return (
    <div>
      <h1>Button</h1>
    <div style={{ display: 'flex', flexDirection: 'row' , padding :'10px', gap : '30px'}}>
    <div>
      <StyledButton onClick={handleClick} type="large">Large Primary Button</StyledButton>
      <StyledButton onClick={handleClick} type="middle">middle</StyledButton>
      <StyledButton onClick={handleClick} type="small">small</StyledButton>
    </div>
    </div>
    </div>

  );
}


export default Button1;


const StyledButton = styled.button`
  padding: 14px 30px;
  /* height: 45px;
  width: 200px; */
  background-color: ${props => props.size === 'middle' ? 'green' : 'blue'};
  color: #fff;
  font-size: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.type === 'middle' ? '#0056b3' : '#5a6268'};
  }
`;
