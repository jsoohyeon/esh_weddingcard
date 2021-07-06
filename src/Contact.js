import React from "react";
import Popup from "reactjs-popup";

import leafleft from './image/leaf-left.png';
import leafright from './image/leaf-right.png';
import phone from "./image/SVG/phone-handset.svg";
   

function contact() {
  return (
    <div className="contact">
        <div className= "contact__head">
            연락하기
        </div>
        <div className = "contact__content">
          <img src = {leafleft} className = "contact__content-leaf-1" />
          <div className = "contact__content-sub-1">
              신랑 김응수 
              <a href="tel:010-3389-0910"> 
                  <img src = {phone} className = "contact__content-icon" alt = "phone"/>
              </a>
              <a href="sms:010-3389-0910"> 
                  <img src = {phone} className = "contact__content-icon" alt = "phone"/>
              </a>
          </div>
          <div className = "contact__content-sub-2">
              신부 주수현
          </div>
          <img src = {leafright} className = "contact__content-leaf-2" />
      </div>
    <Popup trigger={<button className="btn__contact"> 축하 전하기 </button>} >
    <div className = "popup__content">
          <img src = {leafleft} className = "popup__content-leaf-1" />
          <div className = "popup__content-sub-1">
              신랑 김응수 
              <a href="tel:010-3389-0910"> 
                  <img src = {phone} className = "popup__content-icon" alt = "phone"/>
              </a>
              <a href="sms:010-3389-0910"> 
                  <img src = {phone} className = "popup__content-icon" alt = "phone"/>
              </a>
          </div>
          <div className = "popup__content-sub-2">
              신부 주수현
          </div>
          <img src = {leafright} className = "popup__content-leaf-2" />
      </div>
  </Popup>
    </div>
  )
}


export default contact