import React from 'react';
import styled from 'styled-components';

export default function Button1() {
  const alertM = () => {
    alert('버튼을 만들어 보세요.');
  };

  const promptM = () => {
    prompt('어렵나요?', '');
  };

  return (
    <div style={{display: 'flex',
      flexDirection: 'column',
      gap: '2px'}}>
        
      <h1>Button</h1>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '10px', gap: '30px' }}>
        <StyledButton1 onClick={alertM} type="large">Large Primary Button</StyledButton1>
        <StyledButton1 type="medium">Medium</StyledButton1>
        <StyledButton1 type="small">Small</StyledButton1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '10px', gap: '30px' }}>
        <StyledButton2 onClick={promptM} type="large">Large Negative Button</StyledButton2>
        <StyledButton2 type="medium">Medium</StyledButton2>
        <StyledButton2 type="small">Small</StyledButton2>
      </div>
    </div>
  );
}

const StyledButton1 = styled.button`
  cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(85, 239, 196);
    background-color: rgb(255, 255, 255);
    font-weight: 600;


`;

const StyledButton2 = styled.button`
  cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;

  
`;
const dd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    `;