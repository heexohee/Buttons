import { useState } from "react";
import { styled } from "styled-components";



function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSave = () => {
    const data = {
      name: name,
      price: price
    };
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' , padding :'10px'}}>
     
        <div>
        <label>이름</label>
        <StAddInput
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        // placeholder="이름"
      />
      </div>
      <div style={{marginLeft: '20px'}}>
      <div>
      <label>가격</label>
       <StAddInput
        type="number"
        value={price}
        onChange={event => setPrice(Number(event.target.value))}
        // placeholder="가격"
      />
   </div>
   
      </div>
      <StSaveButton onClick={handleSave}>저장</StSaveButton>
    </div>
  );
}

export default Input;

const StAddInput = styled.input`
  height: 40px;
  width: 200px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 12px;
`;

const StSaveButton = styled.button`
  padding: 12px 36px;
  /* background-color: ${props => props.size === 'middle' ? 'green' : 'blue'}; */
  color: black;
  background-color: rgb(85, 239, 196);
  font-size: 14px;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  cursor: pointer;

  /* &:hover {
    background-color: ${props => props.type === 'middle' ? '#0056b3' : '#5a6268'};
  } */
`;

// .iFAkxI {
//     display: flex;
//     flex-direction: row;
//     gap: 30px;
// }