import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Calendar(){
    return (
        <div class="wow fadeInUp section5 inner cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"  align='center'>
            <br/>
            <p class="section5-title section5-main">Date</p>
            <p class="section5-title section5-sub mt-0">11월 28일 · 토요일 · 오전 11:00</p>
            <table class="section5-title section5-table">
                <tr>
                    <td class="sun">S</td>
                    <td>M</td>
                    <td>T</td>
                    <td>W</td>
                    <td>T</td>
                    <td>F</td>
                    <td>S</td>
                </tr>
                <tr>
                    <td class="sun"></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td class="check">4</td>
                </tr>
                <tr>
                    <td class="sun">5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td class="sun">12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td class="sun">19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td class="sun">26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            </div>
    )
}


export default Calendar