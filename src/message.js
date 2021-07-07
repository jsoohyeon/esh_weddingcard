import React, { useEffect, useState } from "react";
import firebase from "./firebase.js";
import moment from 'moment';
import Popup from "reactjs-popup";

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
        userData.reg_dttm = moment().format('YYYY-MM-DD HH:mm:ss');

        setDttm(userData.reg_dttm);
        userRef.push(userData);
        setUserID('');
        setUserName('');
        setContent('');
        setPasswd('');
        setDttm('');
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
            <div className='title'>
                    Message
            </div>
            <div>
                <p className="congrats__message-add">
                    이름:&nbsp;
                    <input style ={{border:0}} onChange={onChangeUserName} name='user_name' value={user_name}/>
                </p>
                <p className="congrats__message-add">
                    패스워드:&nbsp;
                    <input style ={{border:0}} type='password' onChange={onChangePasswd} name='passwd' value={passwd}/>
                </p>
                <p className="congrats__message-add">
                    축하메세지:&nbsp;
                    <input style ={{border:0}} onChange={onChangeContent} name='content' value={content}/>
                </p>
                <button onClick={onClickAdd}>추가하기</button>

                <br/><br/>

                {datas?.map(data =>
                <div key={data.user_id}>
                    <div className="Main-text">
                        <div>
                            <p style={{float:'left'}}/*className="float-left"*/>{data.user_name}</p>
                            <p style={{float:'right'}} /*className="float-right"*/>{data.reg_dttm}</p>
                        </div>
                        <div>
                            <p style={{float:'left'}}>{data.content}</p>
                            <Popup trigger={<button className="congrats__message-del" style={{float:'right'}}> X</button>}>
                                <div className="congrats__message-popup">
                                    <input onChange={onChangeChkPW} name='passwd' placeholder='passwd' value={passwdchk}/>
                                    <button onClick={()=>{onClickRemove(data.user_id, data.passwd, passwdchk)}}>등록</button>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
};

export default Message;