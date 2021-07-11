import React from "react";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons'
import "antd/dist/antd.css";
import img01 from './image/CH5_0023-w1200.jpg'
import img02_VER from './image/CH5_0257-w1600.jpg'
import img03_VER from './image/CH5_0346-w1600.jpg'
import img04 from './image/CH5_0397-w1200.jpg'
import img05_VER from './image/CH5_0513-w1600.jpg'
import img06_PORT from './image/CH5_0620-w1200.jpg'
import img07_PORT from './image/CH5_0793-w1200.jpg'
import img08 from './image/CH5_0835-w1200.jpg'
import img09_PORT from './image/CH5_0868-w1200.jpg'
import img10_VER from './image/CH5_0884-w1200.jpg'
import img11 from './image/CH5_0917-w1200.jpg'
import img12 from './image/CH5_1012-w1200.jpg'
import img13 from './image/CH5_1050-w1200.jpg'

function Gallery(){
    return (
        <div className = "gallery">
            <div className='head'>
                <h2 class="head__text">
                    Gallery
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>

            <div align='center' className="Gallery">
                <Carousel arrows prevArrow={<LeftCircleOutlined/>} nextArrow={<RightCircleOutlined/>} autoplay autoplaySpeed='50' swipeToSlide draggable style={{width:'80%'}}>
                    <div>
                        <img src = {img01} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img02_VER} className="Gallery-photo Gallery-photo-ver" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img03_VER} className="Gallery-photo Gallery-photo-ver" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img04} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img05_VER} className="Gallery-photo Gallery-photo-ver" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img06_PORT} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img07_PORT} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img08} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img09_PORT} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img10_VER} className="Gallery-photo Gallery-photo-ver" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img11} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img12} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img13} className="Gallery-photo" alt = "main"/>
                    </div>
                    
                </Carousel>
                <br/><br/>
            </div>
        </div>
    )
}

export default Gallery