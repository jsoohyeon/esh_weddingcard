import React from "react";
import calPhoto1 from './image/CH5_0925-w1200.jpg'
import calPhoto2 from './image/CH5_0941-w1200.jpg'


function Calendar(){
    return (
        <div className="Calendar">
            <div className="head">
                <h2 class="head__text">
                    save <br/>our date
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>
            <div className="Calendar__photo">
                <img src = {calPhoto1} className="Calendar__photo-1" alt='couple_1'/>
                <img src = {calPhoto2} className="Calendar__photo-2" alt='couple_2'/>
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
                <p>eungsoo.soohyeon </p>
                <p>2021.09.04 SAT. AM 11:30</p>
                <p>Wedding March</p>
            </div>
        </div>
    )
}

export default Calendar