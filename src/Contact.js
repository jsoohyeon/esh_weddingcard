import React, { useState } from "react";
import Popup from "reactjs-popup";

import leafleft from './image/leaf-left.png';
import leafright from './image/leaf-right.png';
import phone from "./image/SVG/067-phone.svg";
import message from "./image/SVG/108-bubble.svg";
import { PhoneFilled, MessageFilled } from '@ant-design/icons'

import { CopyToClipboard } from 'react-copy-to-clipboard';

function Contact() {
    /*<svg
        xmlns="http://www.w3.org/2000/svg"
        width="current"
        height="current"
        viewBox="8 8 24 24"
    >
    <path fill="current" fill-rule="evenodd" d="...." />
    </svg> */
    
    const [state, setState] = useState(false);

    const onCopy = () => {
        setState(true);
    }

    const onAlert = () => {
        alert('복사되었습니다!');
        setState(false);
    }

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
                <a href="tel:010-2916-2785"> 
                    <PhoneFilled  style={{fontSize:'2rem', color:'#fff', backgroundColor: '#0984e3'}} className = "contact__content-iconCircle"/>
                </a>
                <a href="sms:010-2916-2785"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#fff', backgroundColor:'#b2bec3'}} className = "contact__content-iconCircle"/>
                </a>
              </div>
          </div>

          <div className = "contact__content-grid-2">
              <span>신부</span> 주수현
              <div className ="contact-icon">
                <a href="tel:010-3389-0910"> 
                    <PhoneFilled style={{fontSize:'2rem', color: '#fff', backgroundColor:'#fab1a0'}} className = "contact__content-iconCircle"/>
                </a>
                <a href="sms:010-3389-0910"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#fff', backgroundColor:'#b2bec3'}} className = "contact__content-iconCircle"/>
                </a>
            </div>
          </div>
        
          <div className = "contact__content-grid-3">
              <span>아버지&nbsp;</span> 김효식 
              <div className ="contact-icon">
                <a href="tel:010-8899-2785"> 
                <PhoneFilled style={{fontSize:'2rem', color: '#0984e3'}} className = "contact__content-icon"/>
                </a>
                <a href="sms:010-8899-2785"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#b2bec3'}} className = "contact__content-icon"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-4">
              <span>어머니&nbsp;</span> 신미경 
              <div className ="contact-icon">
                <a href="tel:010-3595-1289"> 
                    <PhoneFilled style={{fontSize:'2rem', color: '#0984e3'}} className = "contact__content-icon"/>
                </a>
                <a href="sms:010-3595-1289"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#b2bec3'}} className = "contact__content-icon"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-5">
              <span>아버지&nbsp;</span> 주용회
              <div className ="contact-icon">
                <a href="tel:010-6562-2759"> 
                    <PhoneFilled style={{fontSize:'2rem', color: '#fab1a0'}} className = "contact__content-icon"/>
                </a>
                <a href="sms:010-6562-2759"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#b2bec3'}} className = "contact__content-icon"/>
                </a>
              </div>
          </div>
        
          <div className = "contact__content-grid-6">
              <span>어머니&nbsp;</span> 고점숙
              <div className ="contact-icon">
                <a href="tel:010-3126-2759"> 
                    <PhoneFilled style={{fontSize:'2rem', color: '#fab1a0'}} className = "contact__content-icon"/>
                </a>
                <a href="sms:010-3126-2759"> 
                    <MessageFilled style={{fontSize:'2rem', color:'#b2bec3'}} className = "contact__content-icon"/>
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


    <Popup trigger={<button className="btn__contact"> 마음 전하실 곳 </button>} >
    <div className = "popup__content">
        <img src = {leafleft} className = "popup__content-leaf-1" alt='leaf-left' />

        <div className="popup__content-groom">
            <h4> 신랑측 계좌번호 </h4>
            <CopyToClipboard onCopy={onCopy} text={"110-171-663380"} className="popup__content-btn">
                <button>신한은행 110-171-663380 김응수</button>
            </CopyToClipboard>
            {state ? onAlert() : null }
        </div>
        <div className="popup__content-bride" >
            <h4> 신부측 계좌번호 </h4>
            <CopyToClipboard onCopy={onCopy} text={"1002-552-923835"} className="popup__content-btn">
                <button>우리은행 1002-552-923835 주수현</button>
            </CopyToClipboard>
            {state ? onAlert() : null }
        </div>
        
        <div className="popup__content-copy">
            계좌번호를 클릭하시면 복사됩니다!
        </div>
          <img src = {leafright} className = "popup__content-leaf-2" alt='leaf-right' />
      </div>
  </Popup>
    </div>
  )
}


export default Contact