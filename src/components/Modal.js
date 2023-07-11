import React, { useState } from 'react';
import styled from 'styled-components';

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
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;


//---
function Modal() {
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
      <button onClick={handleOpenModal1}>Open Modal 1</button>
      {isOpen1 && (
        <ModalOverlay onClick={handleOverlayClick1}>
          <ModalContent>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <ModalButtonGroup>
              <ModalButton onClick={handleCloseModal1}>닫기</ModalButton>
              <ModalButton>확인</ModalButton>
            </ModalButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      <button onClick={handleOpenModal2}>Open Modal 2</button>
      {isOpen2 && (
        <ModalOverlay onClick={handleOverlayClick2}>
          <ModalContent>
            <p>닫기 버튼 1개가 있고,
외부 영역을 누르면 모달이 닫혀요.</p>
            <ModalButtonGroup>
              <ModalButton onClick={handleCloseModal2}>Close</ModalButton>
              
            </ModalButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
