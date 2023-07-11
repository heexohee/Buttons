import React from 'react';
import { Button1, Button2, Button3 } from './components/Button1';
import Input from './components/Input';
import Modal from './components/Modal';
import { Root, Trigger, Portal, Overlay, Close, Content } from './components/Modal';
//import { Button1 } from './components/Button2';


function App() {
  return (
    <div>
      <div class='dd'>
      <h1>Button</h1>
      <div style = {{ display: 'flex'}}>
      <Button1 /> {/* 큰 사이즈 버튼 */}
      <Button2 style={{ marginRight: '20px' }}/> {/* 미들 사이즈 버튼 */}
      <Button3 style={{ marginRight: '10px' }}/> {/* 스몰 사이즈 버튼 */}
    </div>
    </div>
    
    <div>
    <h1>Input</h1>
    
    <Input />
    </div>
    <h1>Modal</h1>
    <Modal />
    
    <h1>Select</h1>
    <div>
      open modal1
      open modal2
    </div>



    </div>
    
  );
}

export default App;
