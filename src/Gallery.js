import React from "react";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons'
import "antd/dist/antd.css";
import gallery0102 from './image/gallery0102.jpg'
import gallery0189 from './image/gallery0189.jpg'
import gallery0442 from './image/gallery0442.jpg'
import gallery0454 from './image/gallery0454.jpg'
import gallery1012 from './image/gallery1012.jpg'

function Gallery(){
    return (
        <div className = "gallery">
            <div className='head'>
                Gallery
            <span className="head__line">&nbsp;</span>
            </div>
<<<<<<< HEAD

            <div className="gallery__photo" align='center'>
                <Carousel arrows prevArrow={<LeftCircleOutlined/>} nextArrow={<RightCircleOutlined/>} swipeToSlide draggable style={{width:'80%'}}>
=======
            <div align='center'>
                <Carousel arrows prevArrow={<LeftCircleOutlined/>} nextArrow={<RightCircleOutlined/>} autoplay autoplaySpeed='50' swipeToSlide draggable style={{width:'80%'}}>
>>>>>>> 730f90867c61d695fa0e7880b6c70b0fa95b8eb7
                    <div>
                        <img src = {gallery0102} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {gallery0189} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {gallery0442} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {gallery0454} className="Gallery-photo" alt = "main"/>
                    </div>
                    <div>
                        <img src = {gallery1012} className="Gallery-photo" alt = "main"/>
                    </div>
                </Carousel>
                <br/><br/>
            </div>
        </div>
    )
}

export default Gallery