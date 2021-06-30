import React from "react";
import { Collapse } from 'antd';
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
import naver_map from './image/naver-map.png';
import kakao_map from './image/kakao-map.png';
import google_map from './image/google-map.png';

const { Panel } = Collapse;

function Map(){
    return (
        <div>
            <div className='title'>
                Location
            </div>
            <div className="map-text">
                <div>그랜드힐컨벤션 2층 사브리나홀</div>
                <div>(서울특별시 강남구 대치2동 역삼로 607)</div>
            </div>
            <div className = "col-md-12 text-center">
                <a href="http://naver.me/Fh6NdljX">
                    <img alt="naver-map" id="naver_map" className = "map-icon" src = {naver_map}/>
                </a>
                <a href="http://kko.to/gMDnLUBfB">
                    <img alt="kakao-map" id="kakao_map" className = "map-icon" src = {kakao_map}/>
                </a>
                <a href="https://goo.gl/maps/Q1QfHFwLczLMnvVr6">
                    <img alt="google-map" id="google_map" className = "map-icon" src = {google_map}/>
                </a>
            </div>
            <div align='center'>
                <RenderAfterNavermapsLoaded
                    ncpClientId={'ke3xcrasuv'}
                    errer={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading .... </p>}
                >
                    <NaverMapAPI/>
                </RenderAfterNavermapsLoaded>
            </div>

            <div className="map-center map-info"> 
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="car" key="1">
                        <p>car</p>
                    </Panel>
                    <Panel header="subway" key="2">
                        <p>subway</p>
                    </Panel>
                    <Panel header="bus" key="3">
                        <p>bus</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

function NaverMapAPI() {
    const navermaps = window.naver.maps;
    return (
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'}
            style={{
                width:'60%',
                height:'60vh'
            }}
            defaultCenter={{ lat: 37.5060320, lng: 127.0667230 }} // 지도 초기 위치
            defaultZoom={16} // 지도 초기 확대 배율
        >
            <Marker
                key={1}
                position = {new navermaps.LatLng(37.5060320, 127.0667230)}
                animation = {1}
                onClick = {() => {alert('그랜드힐컨벤션');}}
            />
        </NaverMap>
    );
}

function callback(key){
    console.log(key);
}

export default Map