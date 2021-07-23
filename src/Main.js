import React from "react";
import mainimgSamll from './image/CH5_0189-2-small.jpg';
import and from './image/and.png'

function main(){
    return (
        <div className="header">
            <div>
                <div className="Main-photo__wrap">
                    <img src = {mainimgSamll} className = "Main-photo" alt = "main"/>
                    <div className="Main-photo__text">
                      <h1>0904</h1>
                      <span>&nbsp;</span>
                      <h2>D - {getDDay()}<br/>Wedding day</h2>
                    </div>
                <h6 className = "Main-photo__sub">Please join us for the wedding</h6>
                </div>
                
                <div className = "Main-text">
                    <p className = "Main-text__name">
                        김&nbsp;응&nbsp;수&nbsp;&nbsp;<img style={{height:'2rem'}}src={and} alt='그리고'/>&nbsp;&nbsp;주&nbsp;수&nbsp;현                
                    </p>

                    <p className = "Main-text__sub">
                        2021. 09. 04 SAT AM 11:30
                    </p>

                    <p className = "Main-text__sub">
                        그랜드힐 컨벤션 2층 사브리나홀
                    </p>
                </div>
                
            </div>

            <section className = "greeting">
            <div className='head'>
                <h2 class="head__text">
                Invitaion<br/>card
                </h2>
            <span className="head__line">&nbsp;</span>
            </div>
            
                <div className = "greeting__text">
                    
                    <div className = "greeting__message-head">
                        좋은날, 당신과 함께
                    </div>
                    <div className = "greeting__message-body">
                        <br/> 
                        어느덧 시간이 흘러<br/>저희 둘 처음 손 잡은 지 7년이 흘렀습니다.<br/>
                        평생 이 손을 놓지 않기로 약속했습니다.<br/><br/>
                        저희 두 사람이 사랑으로<br/>약속을 지켜나갈 수 있도록<br/>
                        귀한 걸음 하시어<br/>따뜻하게 축복해주시면 감사하겠습니다.
                        
                    </div>
                    
                    <span className = "greeting-span">&nbsp;</span>
                    <div className = "greeting-parent">
                        김효식 ⋄ 신미경 <span>의 아들</span> 김응수 <br/>
                        주용회 ⋄ 고점숙 <span>의 &nbsp;&nbsp;딸&nbsp;</span> 주수현
                    </div>

                </div>
            </section>
        </div>
    )
}

function getDDay() {
    const setDate = new Date("2021-09-04T00:00:00+0900");
    const now = new Date();
    const distance = setDate - now;

    const day = Math.floor(distance / (1000*60*60*24));
    
    return day;
}

export default main