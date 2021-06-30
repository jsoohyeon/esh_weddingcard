import React from "react";
//import mainimg from './image/mainimg2.jpeg'
import mainimg from './image/mainimg2_b.jpg'
import eungself from './image/eungself.jpeg'
import hyeonself from './image/hyeonself.jpeg'

function main(){
    return (
        <div>
            <div>
                <div>
                <img src = {mainimg} className = "Main-photo" alt = "main"/>
                    <div className="Main-photo-text">
                    <span /*className = "Main-photo-text"*/>⎽⎽</span><br/>
                        09 <br/>
                        月 <br/>
                        04 <br/>
                        日 <br/>
                    <span /*className = "Main-photo-text"*/>⎺⎺</span>
                    </div>
                </div>

                <p className = "Main-text">
                    김응수&nbsp;&nbsp;&nbsp;ෆ&nbsp;&nbsp;&nbsp;주수현
                </p>

                <p className = "Main-text">
                    2021. 09. 04 SAT AM 11:30
                </p>

                <p className = "Main-text">
                    그랜드힐 컨벤션 2층 사브리나홀
                </p>

                <row>
                    <img src = {eungself} className = "Self-photo-right" alt = "Eungsoo"/>
                    <img src = {hyeonself} className = "Self-photo-left" alt = "Soohyeon"/>
                </row>
            </div>

            <div style = {{margin:"20px"}}/>

            <div className = "background-lightgray">
                내용

            </div>
        </div>
    )
}

export default main