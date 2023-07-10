import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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
  alert('버튼을 만들어 보세요.');
}

function Button1() {
  return (
    <div>
      <StyledButton onClick={handleClick}>Large Primary Button</StyledButton>
    </div>
  );
}
// function Button11() {
//   return (
//     <div>
//       <StyledButton11 onClick={handleClick}>Large Primary Button</StyledButton11>
//     </div>
//   );
// }


export default Button1;
