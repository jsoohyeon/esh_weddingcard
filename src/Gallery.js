import React from "react";
import Slider from "react-slick";
import gallery0102 from './image/gallery0102.jpg'
import gallery0189 from './image/gallery0189.jpg'
import gallery0442 from './image/gallery0442.jpg'
import gallery0454 from './image/gallery0454.jpg'
import gallery1012 from './image/gallery1012.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows : true,
    prevArrow : <button type='button' class='slick-prev' >Previous</button>,		// 이전 화살표 모양 설정
    nextArrow : <button type='button' class='slick-next'>Next</button>,
    draggable: true				
}

function Gallery(){
    return (
        <div className = "gallery">
            <div className='title'>
                Gallery
            </div>
            <div align='center'>
                <Slider {...settings} style={{width:'80%'}}>
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
                </Slider>
            </div>
        </div>
    )
}

export default Gallery