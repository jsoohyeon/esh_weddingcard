import React from "react";

import calPhoto1 from './image/CH5_0925.jpg'
import calPhoto2 from './image/CH5_0941.jpg'


function Calendar(){
    return (
<<<<<<< HEAD
        <div className="wow fadeInUp section5 inner cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"  align='center'>
            <br/><br/>
            <p className="section5-title section5-main title">Date</p>
            <p className="section5-title section5-sub mt-0">09월 04일 · 토요일 · 오전 11:30</p>
            <table className="wow fadeInUp section5-title section5-table">
                <tr align='center'>
                    <td className="sun">S</td>
                    <td>M</td>
                    <td>T</td>
                    <td>W</td>
                    <td>T</td>
                    <td>F</td>
                    <td>S</td>
                </tr>
                <tr align='center'>
                    <td className="sun"></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className="check">4</td>
                </tr>
                <tr align='center'>
                    <td className="sun">5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                </tr>
                <tr align='center'>
                    <td className="sun">12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                </tr>
                <tr align='center'>
                    <td className="sun">19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                </tr>
                <tr align='center'>
                    <td className="sun">26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <p className="wow fadeInUp section5-title section5-sub">응수 ❤️ 수현 D - {getDDay()}</p>
            <br/><br/><br/><br/><br/>
=======
        <div className="Calendar">
            <div className="head">
                save <br/>our date
                <span className="head__line">&nbsp;</span>
            </div>
            <div className="Calendar__photo">
                <img src = {calPhoto1} className="Calendar__photo-1" />
                <img src = {calPhoto2} className="Calendar__photo-2" />
            </div>
            <div className="Calendar__table">
                <p className="Calendar__table-month">09</p>
                <table class="Calendar__table-main">
                    <tr align='center'>
                        <td class="sun">S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                    <tr align='center'>
                        <td class="sun"></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td class="check">4</td>
                    </tr>
                    <tr align='center'>
                        <td class="sun">5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr align='center'>
                        <td class="sun">12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                    </tr>
                    <tr align='center'>
                        <td class="sun">19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                    </tr>
                    <tr align='center'>
                        <td class="sun">26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                {/* <p class="Calendar__table-sub">09월 04일 · 토요일 · 오전 11:30 응수 ❤️ 수현 D - {getDDay()}</p> */}
            </div>
            <div className="Calendar__sub">
                <p>eunsoo.soohyeon </p>
                <p>2021.09.04 SAT. AM 11:30</p>
                <p>March wedding</p>
            </div>
>>>>>>> 8f4f4b4130a0e75fc7953e95a0b455cdf6e45f86
        </div>
    )
}

function getDDay() {
    const setDate = new Date("2021-09-04T11:30:00+0900");
    const now = new Date();
    const distance = setDate - now;

    const day = Math.floor(distance / (1000*60*60*24));
    
    return day;
}

export default Calendar