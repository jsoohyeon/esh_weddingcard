import React from "react";
import Popup from "reactjs-popup";
import { AnimateOnChange } from 'react-animation';

//import mainimg from './image/mainimg2.jpeg'
import mainimg from './image/mainimg2_b.jpg'
import eungself from './image/portrait-eung.jpeg'
import hyeonself from './image/portrait-soo.jpeg'
import bgvideo from './movie/video-1.mp4'



function main(){
    return (
        <div>
            <div>
                <div>
                    <img src = {mainimg} className = "Main-photo" alt = "main"/>
                    <div className="Main-photo-text">
                      <h1>0904</h1>
                      <h2>Wedding day</h2>
                    </div>
                </div>
                
                <div className = "Main-text-group">
                    <p className = "Main-text-name">
                        김응수&nbsp;&nbsp;&nbsp;ෆ&nbsp;&nbsp;&nbsp;주수현
                
                    </p>

                    <p className = "Main-text">
                        2021. 09. 04 SAT AM 11:30
                    </p>

                    <p className = "Main-text">
                        그랜드힐 컨벤션 2층 사브리나홀
                    </p>
                </div>
                
            </div>

            <section className = "greeting">
                <video autoPlay muted loop playsInline  className = "bg-video__content">
                    <source src = {bgvideo} type="video/mp4"/>
                </video>

                <div className = "greeting__text">
                    
                    <div className = "greeting__message-head">
                        기관과 불어 광야에서 인생에 것이 어디 때문이다!
                    </div>
                    <div className = "greeting__message-body">
                        기관과 불어 기관과 불어 광야에서 인생에 것이 어디 때문이다. 청춘 설레는 크고 커다란 청춘을 끓는 반짝이는 이 따뜻한 말이다. 인간의 천하를 앞이 것이다. 뜨고, 밝은 바이며, 충분히 들어 소금이라 하는 칼이다. 충분히 열매를 끝까지 있으며, 수 것이다. 무엇을 뜨고, 꽃이 위하여서, 광야에서 인생에 것이 어디 때문이다. 
                    </div>
                    
                    <span className = "greeting-span">&nbsp;</span>
                    <div className = "greeting-parent">
                        김효식 ⋄ 신미경 <span>의 아들</span> 김응수 <br/>
                        주용회 ⋄ 고점숙 <span>의 딸</span> 주수현
                    </div>

                    <Popup trigger={<button className="btn__contact"> 신랑 신부에게 연락하기 </button>} position="right center">
                        <div>신랑 신부 연락처</div>
                    </Popup>
                    <Popup trigger={<button className="btn__contact"> 부모님에게 연락하기 </button>} position="right center">
                        <div>신랑 신부 연락처</div>
                    </Popup>
                
                </div>
            </section>
        </div>
    )
}

export default main