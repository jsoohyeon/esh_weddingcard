import React from "react";
import { Collapse } from 'antd';
import { CopyOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
import naver_map from './image/naver-map.png';
import kakao_map from './image/kakao-map.png';
import google_map from './image/google-map.png';
import t_map from './image/t-map.png'

const { Panel } = Collapse;

function Map(){
    const onCopy = () => {
        alert('복사되었습니다!');
    }
    return (
        <div className="map">
            <div className="head">
                <h2 class="head__text">
                    Location
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>

            <div className="map-text">
                <div>그랜드힐컨벤션 2층 사브리나홀</div>
                <div>(서울특별시 강남구 대치2동 역삼로 607&nbsp;
                    <CopyToClipboard onCopy={onCopy} text={"서울특별시 강남구 대치2동 역삼로 607"} className="popup__content-btn">
                        <CopyOutlined />
                    </CopyToClipboard>
                )
                </div>
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
                <a href="https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx04069debe6214667a10b31992300cef9&name=%EA%B7%B8%EB%9E%9C%EB%93%9C%ED%9E%90%EC%BB%A8%EB%B2%A4%EC%85%98&lon=127.0667230&lat=37.5060320">
                    <img alt="T-map" id="t_map" className="map-icon" src = {t_map}/>
                </a>
            </div>
            <div align='center'>
                <RenderAfterNavermapsLoaded
                    ncpClientId={'ke3xcrasuv'}
                    errer={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading .... </p>}
                >
                    <NaverMapAPI />
                </RenderAfterNavermapsLoaded>
            </div>
            <br/>
            <div className="map-center map-info">
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="지하철 이용시" key="1">
                        <p className = 'map-info__text'>지하철 2호선 삼성역 1번 출구: 셔틀버스 항시 대기<br/>
                            2번 출구: 도보 10분정도 소요</p>
                    </Panel>
                    <Panel header="버스 이용시" key="2">
                        <p className = 'map-info__text'>간선버스(파랑색): 143, 146, 341, 360, 401 <br/>
                            지선버스(녹색): 2413, 3411, 3422, 4318, 4419, 917, 11-3<br/>
                            광역버스(빨강색): 9407, 6900</p>
                    </Panel>
                    <Panel header="자가용 이용시" key="3">
                        <p className = 'map-info__text'>강남경찰서 → 강남운전면허시험장 방면 350M 오른쪽 그랜드힐 컨벤션 <br/>
                            * 네비게이션 그랜드힐 컨벤션 입력</p>
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
                width:'100%',
                height:'30rem'
            }}
            defaultCenter={{ lat: 37.506751, lng: 127.065882 }} // 지도 초기 위치
            defaultZoom={16} // 지도 초기 확대 배율
        >
            <Marker
                key={1}
                position = {new navermaps.LatLng(37.5060320, 127.0667230)}
                animation = {1}
                //nClick = {() => {alert('그랜드힐컨벤션');}}
            />
        </NaverMap>
    );
}

export default Map