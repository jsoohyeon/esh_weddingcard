import React,{ useRef, useEffect, useState } from "react";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    const [mainSlick, setMainSlick] = useState(null);
    const [pagingSlick, setPagingSlick] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setMainSlick(slider1.current);
        setPagingSlick(slider2.current);
    }, []);


    const mainSettings = {
        dots: false,
        arrows : true,
        infinite: true,
        slidesToshow: false,
        slidesToScroll: 1,
    };

    const pagingSettings = {
        dots: false,
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    return (
        <div className = "gallery">
            <div className='head'>
                <h2 class="head__text">
                    Gallery
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>

            <div align='center' className="Gallery" style={{width:'100%', height:'100%'}}>
                <Slider ref={slider1}
                asNavFor={pagingSlick}
                {...mainSettings}
                >
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
                </Slider>

                <Slider
                    asNavFor = {mainSlick}
                    ref = {slider2}
                    {...pagingSettings}
                >
                    <div>
                        <img src = {img01} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img02_VER} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img03_VER} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img04} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img05_VER} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img06_PORT} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img07_PORT} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img08} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img09_PORT} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img10_VER} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img11} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img12} className="Gallery-nav" alt = "main"/>
                    </div>
                    <div>
                        <img src = {img13} className="Gallery-nav" alt = "main"/>
                    </div>
                </Slider>
                <br/><br/>
            </div>
        </div>
    )
}

export default Gallery