import React from "react";
import Popup from "reactjs-popup";


import leafleft from './image/leaf-left.png';
import leafright from './image/leaf-right.png';
import  phone from "./image/SVG/phone-handset.svg";
   

function contact() {
  return (
    <div>
    <Popup trigger={<button className="btn__contact"> 신랑 신부에게 연락하기 </button>} >
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
  <Popup trigger={<button className="btn__contact"> 부모님에게 연락하기 </button>} position="right center">
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