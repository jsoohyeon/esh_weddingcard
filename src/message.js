import React, { useEffect, useState } from "react";
import firebase from "./firebase.js";
import moment from 'moment';
import Popup from "reactjs-popup";
import { CloseOutlined, NotificationOutlined } from '@ant-design/icons'


function Message () {
    const [datas, setDatas] = useState([]);
    const [user_id, setUserID] = useState('');
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
        const userData = {user_id, user_name, content, passwd, reg_dttm};

        if(userData.user_name === ''){
            alert('이름을 입력해주세요');
        }
        else if(userData.content === ''){
            alert('축하 메세지를 입력해주세요.');
        }
        else if(userData.passwd === ''){
            alert('비밀번호를 입력해주세요');
        }
        else {
            userData.reg_dttm = moment().format('YYYY-MM-DD HH:mm:ss');

            setDttm(userData.reg_dttm);
            userRef.push(userData);
            setUserID('');
            setUserName('');
            setContent('');
            setPasswd('');
            setDttm('');
        }
    }

    const onClickRemove = (user_id, passwd, chkpasswd) => {
        if(passwd === chkpasswd){
            userRef.child(user_id).remove();
            alert('삭제되었습니다');
        }
        else{
            alert('비밀번호가 다릅니다');
        }
    }

    return (
        <div>
            <div className="head">
                <h2 class="head__text">
                    congrats <br/> US
                </h2>
                <span className="head__line">&nbsp;</span>
            </div>
            <div>
                <div className="congrats__message-add">
                    <input className='congrats__message-add__name' onChange={onChangeUserName} name='user_name' placeholder='Name' value={user_name}/>
                    &nbsp;
                    <input className='congrats__message-add__passwd' type='password' onChange={onChangePasswd} name='passwd' placeholder='Password'value={passwd}/>
                    <br/>
                    <input className='congrats__message-add__content' onChange={onChangeContent} name='content' placeholder='Message' value={content}/>
                    <br/>
                    <button className='congrats__message-add__button' onClick={onClickAdd}>등록하기</button>
                </div>
                <br/><br/>

                {datas?.map(data =>
                <div key={data.user_id}>
                    <div className="congrats__message-list">
                        <div>
                            <p className= "congrats__message-list__name">{data.user_name}
                                <span className="congrats__message-list__date">&nbsp;&nbsp;&nbsp;{data.reg_dttm}</span>
                            </p>
                            <Popup trigger={<button className="congrats__message-del"><CloseOutlined/></button>}>
                                <div className="congrats__message-popup">
                                    <p><NotificationOutlined/>&nbsp;입력하셨던 비밀번호를 입력하세요.</p>
                                    <input onChange={onChangeChkPW} type='password' name='passwd' placeholder='passwd' value={passwdchk}/>
                                    <button onClick={()=>{onClickRemove(data.user_id, data.passwd, passwdchk)}}>등록</button>
                                </div>
                            </Popup>
                        </div>
                        <div>
                            <p className="congrats__message-list__content">{data.content}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
};

export default Message;