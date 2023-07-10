import React from 'react';
import styled from 'styled-components';

const StButton2 = styled.button`
  padding: 14px 30px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function handleClick() {
  prompt('어렵나요?','');
}

function Button2() {
  return (
    <div>
      <StButton2 onClick={handleClick}>Large Negative Button</StButton2>
    </div>
  );
}

export default Button2;