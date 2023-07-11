import React from 'react';
import styled from 'styled-components';


function handleClick() {
  alert('버튼을 만들어 보세요.');
}

function Button1() {
  return (
    <div>
      <StyledButton onClick={handleClick} type="large">Large Primary Button</StyledButton>
    </div>
  );
}

function Button2() {
  return (
    <div>
      <StyledButton  size="middle">Middle</StyledButton>
    </div>
  );
}

function Button3() {
  return (
    <div>
      <StyledButton size="small">Small</StyledButton>
    </div>
  );
}

export { Button1, Button2, Button3 };


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
