import React, { useState } from 'react';
import styled from 'styled-components';


//---
export default function Modal() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpenModal1 = () => {
    setIsOpen1(true);
  };

  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal1 = () => {
    setIsOpen1(false);
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };

  const handleOverlayClick1 = () => {
    // Do nothing to prevent modal 1 from closing on overlay click
  };

  const handleOverlayClick2 = () => {
    handleCloseModal2();
  };

  return (
    <>
    <h1>Modal</h1>
    <div class style={{ padding : '10px', display: 'flex', gap: '10px'}} >
      <StyledButton1 onClick={handleOpenModal1}>Open Modal 1</StyledButton1>
      {isOpen1 && (
        <ModalOverlay onClick={handleOverlayClick1}>
          <ModalContent>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <ModalButtonGroup>
              <ModalButton1 onClick={handleCloseModal1}>닫기</ModalButton1>
              <ModalButton2>확인</ModalButton2>
            </ModalButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      <StyledButton2 onClick={handleOpenModal2}>Open Modal 2</StyledButton2>
      {isOpen2 && (
        <ModalOverlay onClick={handleOverlayClick2}>
          <ModalContent>
            <p>닫기 버튼 1개가 있고,
외부 영역을 누르면 모달이 닫혀요.</p>
            <ModalButtonGroup>
              <ModalButton1 onClick={handleCloseModal2}>X</ModalButton1>
              
            </ModalButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
      </div>
    </>
  );
}


//--
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  border-radius: 20px; 
`;

const ModalButton1 = styled.button`
  border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;
`;

const ModalButton2 = styled.button`
  border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`;

const StyledButton1 = styled.button`
border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
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
