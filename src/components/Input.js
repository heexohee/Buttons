import { useState } from "react";
import { styled } from "styled-components";



function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    const data = {
      name: name,
      price: price
    };
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' , padding :'10px', gap : '30px'}}>
     
        <div>
        <label>이름</label>
        <StAddInput
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        // placeholder="이름"
      />
      </div>
      <div>
      <div>
      <label>가격</label>
       <StAddInput
        type="number"
        value={price}
        onChange={event => setPrice(Number(event.target.value))}
        placeholder="0"
      />
   </div>
   
      </div>
      <StSaveButton onClick={handleSave}>저장</StSaveButton>
    </div>
  );
}

export default Input;


//--- 
const StAddInput = styled.input`
  height: 40px;
  width: 200px;
  border: 1px solid black;
  border-radius: 8px;
  padding-left: 12px;
padding-right: 12px;
  
`;

const StSaveButton = styled.button`
  height: 40px;
    width: 100px;
  /* background-color: ${props => props.size === 'middle' ? 'green' : 'blue'}; */
  color: black;
  background-color: rgb(85, 239, 196);
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  
  cursor: pointer;

   &:hover {
    background-color:  '#0056b3';
  } 
`;

// .iFAkxI {
//     display: flex;
//     flex-direction: row;
//     gap: 30px;
// }