import { useState } from "react";
import { styled } from "styled-components";

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Input창에서 3자리 마다 ,콤마 붙여주는 것
  // formatNumber 함수는 숫자를 입력받아 
  // 3자리마다 콤마를 추가하는 역할을 합니다. 
  // 정규식 /\\B(?=(\\d{3})+(?!\\d))/g는 3자리 숫자 그룹을 찾고, 
  // 그룹 앞에 위치한 문자(숫자가 아닌 문자)의 위치를 찾아 콤마를 추가합니다.
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
 // 콤마 제거 후 저장하기 함수.
  const handleSave = () => {
    const data = {
      name: name,
      price: price.replace(/,/g, '') 
    };

    // const formattedData = {
    //   name: data.name,
    //   price: formatNumber(data.price) // 콤마 추가하여 표시
    // };
  
    alert(JSON.stringify(data)); 
    // **stringify()**
    //자바스크립트 객체 → JSON 문자열 변환. 
    // 네트워크를 통해 객체를 JSON 문자열로 변환할 때 사용
    
  };
 // 사용자가 가격 입력 창에 값을 입력할 때마다 해당 값은 
 // 콤마가 제거되고, 3자리마다 콤마가 추가된 형식으로 price 상태가 업데이트
  const handlePriceChange = (event) => {
    const rawValue = event.target.value;
    const numericValue = rawValue.replace(/,/g, ''); // 콤마 제거
    const formattedValue = formatNumber(numericValue); // 3자리마다 콤마 추가
    setPrice(formattedValue); // price가격 업데이트
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Input</h1>
      <div style={{ padding : '10px', display: 'flex', flexDirection: 'row', gap : '30px'}}>
        <div>
          <label>이름</label>
          <StAddInput
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <div>
            <label>가격</label>
            <StAddInput
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="0"
            />
          </div>
        </div>
        <StSaveButton onClick={handleSave}>저장</StSaveButton>
      </div>
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