import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastMessage = ({show, message}) =>
  show && (
    <div style={{left: '50%', transform: "translatex(-50%)", position:"fixed" }}>  
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Input Error
          </ToastHeader>
          <ToastBody>
            {message}
          </ToastBody>
        </Toast>
      </div>      
    </div>
  );


export default ToastMessage;
