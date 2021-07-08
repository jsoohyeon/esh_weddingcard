import React from "react";
import Popup from "reactjs-popup";

import leafleft from './image/leaf-left.png';
import leafright from './image/leaf-right.png';
import phone from "./image/SVG/067-phone.svg";
import message from "./image/SVG/108-bubble.svg";
import { CopyToClipboard } from 'react-copy-to-clipboard';

   

function contact() {
  return (
    <div className="contact">
        <div className="head">
            <h2 class="head__text">
                get<br/>in touch
            </h2>
            <span className="head__line">&nbsp;</span>
        </div>
        
        <div className = "contact__content">
         
          <div className = "contact__content-grid-1">
              <span>신랑</span> 김응수 
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
              </div>
          </div>

          <div className = "contact__content-grid-2">
              <span>신부</span> 주수현
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
            </div>
          </div>
        
          <div className = "contact__content-grid-3">
              <span>아버님 </span> 김효식 
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-4">
              <span>모</span> 김효식 
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-5">
              <span>부</span> 주용회
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-6">
              <span>모</span> 고점숙
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <img src = {phone} className = "contact__content-icon" alt = "phone"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <img src = {message} className = "contact__content-icon" alt = "phone"/>
                </a>
              </div>
          </div>

          <div className = "contact__content-grid-7 contact__content-line">
              &nbsp;
          </div>
          <div className = "contact__content-grid-8 contact__content-line">
              &nbsp;
          </div>
      </div>


    <Popup trigger={<button className="btn__contact"> 축하 전하기 (계좌번호) </button>} >
    <div className = "popup__content">
        <img src = {leafleft} className = "popup__content-leaf-1" />

        <div className="popup__content-groom">
            <h4> 신랑 계좌번호 </h4>
            <CopyToClipboard text={"123456789"} className="popup__content-btn">
                <button>하나은행 123456789 김응수</button>
            </CopyToClipboard>
        </div>
        <div className="popup__content-bride" >
            <h4> 신부 계좌번호 </h4>
            <CopyToClipboard text={"123456789"} className="popup__content-btn">
                <button>하나은행 123456789 주수현</button>
            </CopyToClipboard>
        </div>
        
        <div className="popup__content-copy">
            계좌번호를 클릭하시면 복사됩니다!
        </div>
          <img src = {leafright} className = "popup__content-leaf-2" />
      </div>
  </Popup>
    </div>
  )
}


export default contact