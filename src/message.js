import React, { useEffect, useState } from "react";
import firebase from "./firebase.js";
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons'

function Messeage () {
    const [datas, setDatas] = useState([]);
    const [user_name, setUserName] = useState('');
    const [content, setContent] = useState('');
    const [passwd, setPasswd] = useState('');
    const [reg_dttm, setDttm] = useState('');
    const [passwdchk, setChk] = useState('');
    const userRef = firebase.database().ref('users');
 

    useEffect(() => {
        userRef.on('value', snapshot => {
            const users = snapshot.val();
            const usersData =[];
            for (let user_id in users){
                usersData.push({ ...users[user_id], user_id});
            }
            setDatas(usersData);
        })
    },[]);

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePasswd = (e) => {
        setPasswd(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onChangeChkPW = (e) => {
        setChk(e.target.value);
    }


    const onClickAdd = () => {
        const userData = {user_name, content, passwd, reg_dttm};

        if(userData.user_name === ''){
            alert('이름을 입력해주세요');
        }
        else if(userData.content === ''){
            alert('메세지를 입력해주세요.');
        }
        else if(userData.passwd === ''){
            alert('비밀번호를 입력해주세요');
        }
        else {
            userData.reg_dttm = moment().format('YYYY-MM-DD HH:mm:ss');
            userData.popchk = 'false';

            setDttm(userData.reg_dttm);

            userRef.push(userData);
            setUserName('');
            setContent('');
            setPasswd('');
            setDttm('');
        }
    }


    const popPwd = (data) => {
        if(document.getElementById(data.user_id).style.display === 'none' || document.getElementById(data.user_id).style.display===''){
            document.getElementById(data.user_id).style.display='block';
        }
        else{
            document.getElementById(data.user_id).style.display='none';
        }
    }
    

    const onClickRemove = (user_id, passwd, chkpasswd) => {
        if(passwd === chkpasswd){
            userRef.child(user_id).remove();
            alert('삭제되었습니다');
            setChk('');
        }
        else{
            alert('비밀번호가 다릅니다');
            setChk('');
        }
    }

    return (
        <div className = "congrats">
            <div className="head">
                <h2 class="head__text">
                    congrats <br/> US
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>
            <div>
                <div className="congrats__message-add">
                    <div>
                        <input className='congrats__message-add__name congrats__input' onChange={onChangeUserName} name='user_name' placeholder='Name' value={user_name} id="name" required/>
                        <label for="name" className="congrats__label">이름을 입력하였습니다.</label>
                        
                    </div>
                    <div>
                         <input className='congrats__message-add__passwd congrats__input' type='password' onChange={onChangePasswd} name='passwd' placeholder='Password'value={passwd} id="password" required/>
                        <label for="password" className="congrats__label">비밀번호를 기억하세요.</label>
                    </div>
                    <div>
                        <input className='congrats__message-add__content congrats__input' onChange={onChangeContent} name='content' placeholder='Message' value={content} id="content" required/>
                        <label for="content" className="congrats__label">축하 메시지 입력중...</label>
                    </div>
                    
                    <button className='congrats__message-add__button' onClick={onClickAdd}>등록</button>
                </div>
                <br/><br/>

                

                {datas?.map(data =>
                <div key={data.user_id}>
                    <div className="congrats__message-list">
                        <div>
                            <p className= "congrats__message-list__name">{data.user_name}</p>
                            <span className="congrats__message-list__date">&nbsp;&nbsp;&nbsp;{data.reg_dttm}</span>
                            
                        </div>
                        <div>
                            <p className="congrats__message-list__content">{data.content}</p>
                            <button  className="congrats__message-del" onClick={() => popPwd(data)}> <CloseOutlined/></button>
                            <div id={data.user_id} className={"display-None"}>
                                <br/>
                                <input onChange={onChangeChkPW} type='password' name='passwd' placeholder='Password' value={passwdchk} className="congrats__message-popup-password"/>
                                <button onClick={()=>{onClickRemove(data.user_id, data.passwd, passwdchk)}} className = "congrats__message-popup-btn">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
};

export default Messeage;