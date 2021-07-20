import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoMain from './image/CH5_1050-w1200.jpg';
import Kakao from './image/kakao.png';
import Copy from './image/copy.png';
import Message from './image/message.png';

function Futter() {
    const [smsURL, setSmsURL] = useState('');
    var URL = 'https://jsoohyeon.github.io/invite_you';
    
    const KakaoURL = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '응수❤️수현 결혼식 초대합니다.',
                description:'2021.09.04 AM 11:30 그랜드힐 컨벤션',
                imageUrl:KakaoMain,
                link: {
                    webUrl: URL,
                    mobileWebUrl: URL
                }
            },
            buttons:[{
                title:'웹으로 보기',
                link: {
                    webUrl: URL,
                    mobileWebUrl: URL
                }
            }]
        })
    }

    const TextURL = () => {
        const userAgent = navigator.userAgent.toLocaleLowerCase()

        if (userAgent.search('android') > -1) {
            setSmsURL('sms:?body=https://jsoohyeon.github.io/invite_you/ 2021.09.04 AM 11:30 그랜드힐 컨벤션 2층 사브리나홀');
        } else if (userAgent.search('iphone') > -1 || userAgent.search('ipad') > -1) {
            setSmsURL('sms:&body=https://jsoohyeon.github.io/invite_you/ 2021.09.04 AM 11:30 그랜드힐 컨벤션 2층 사브리나홀');
        }
    }

    const onCopy = () => {
        alert('복사되었습니다!');
    }

    return (
        <div>
            <div className="grid">
                <div className="grid-1">
                    <a className = "Message-icon" href= {smsURL} onClick = {TextURL}>
                        <img className="Message-icon_btn" src={Message} alt="Message" />
                    </a>
                </div>
                <div className="grid-2">
                    <button className="Kakao-icon_btn" type="button"onClick={KakaoURL}><img src={Kakao} className="Kakao-icon" alt="kakao"/></button>
                </div>
                <div className="grid-3">
                    <CopyToClipboard onCopy={onCopy} text={"https://jsoohyeon.github.io/invite_you/"}>
                        <img className="Copy-icon" src={Copy} alt="Copy"/>
                    </CopyToClipboard>
                </div>
            </div>
            <div>
                <p className = "Copyright-txt"> 
                    Copyright 2021. Jessie Soohyeon Eungsoo <br/> All rights reserved.
                </p>
            </div>
        </div>
    )
}


export default Futter