import React from 'react';
import styled, { css } from 'styled-components';

export default function Button1() {
  const alertM = () => {
    alert('버튼을 만들어 보세요.');
  };

  const promptM = () => {
    prompt('어렵나요?', '');
  };

  return (
    <div style={{ padding: '10px'
      
    }}>
      <h1>Button</h1>
      <ButtonRow>
        <StyledButton1 onClick={alertM} type="large">Large Primary Button</StyledButton1>
        <StyledButton1 type="medium">Medium</StyledButton1>
        <StyledButton1 type="small">Small</StyledButton1>
      </ButtonRow>
      <ButtonRow>
        <StyledButton2 onClick={promptM} type="large">Large Negative Button</StyledButton2>
        <StyledButton2 type="medium">Medium</StyledButton2>
        <StyledButton2 type="small">Small</StyledButton2>
      </ButtonRow>
    </div>
  );
}

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px 5px 20px;
  gap: 10px;
`;

const buttonStyles = css`
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
`;

const StyledButton1 = styled.button`
  ${buttonStyles}
  color: rgb(0, 0, 0);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(85, 239, 196);
  background-color: rgb(255, 255, 255);
  

  ${props => props.type === 'medium' && css`
    border: none;
    background-color: rgb(85, 239, 196);
    height: 45px;
    width: 130px;
  `}

  ${props => props.type === 'small' && css`
    border: none;
    background-color: rgb(85, 239, 196);
    height: 40px;
    width: 100px;
  `}

  
`;
// ---
const StyledButton2 = styled.button`
  ${buttonStyles}
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);

  ${props => props.type === 'medium' && css`
    border: none;
    background-color: rgb(250, 177, 160);
    height: 45px;
    width: 130px;
  `}

  ${props => props.type === 'small' && css`
    border: none;
    background-color: rgb(250, 177, 160);
    height: 40px;
    width: 100px;
  `}

`;
