import React, { useEffect, useState } from "react";
import firebase from "./firebase";

function Message () {
    const [datas, setDatas] = useState([]);
    const [user_id, setUserID] = useState('');
    const [user_name, setUserName] = useState('');
    const [content, setContent] = useState('');
    const [passwd, setPasswd] = useState('');
    const userRef = firebase.database().ref('wedding-card');

    useEffect(() => {
        userRef.on('value', snapshot => {
            const users = snapshot.val();
            const usersData = [];
            for (let user_id in users){
                usersData.push({ ...users[user_id], user_id});
            }
            setDatas(usersData);
        })
    }, [userRef]);

    const onChangeUserID = (e) => {
        setUserID(e.target.value);
    }

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePasswd = (e) => {
        setPasswd(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onClickAdd = () => {
        const userData = {user_id, user_name, content, passwd};

        userRef.push(userData);
        setUserID('');
        setUserName('');
        setContent('');
        setPasswd('');
    }

    const onClickRemove = (user_id) => {
        userRef.child(user_id).remove();
    }

    const onUpdate = (user_id) => {
        const [user] = datas.filter(el => el.user_id === user_id);

        userRef.child(user_id).update({
            content: user.user_id++
        });

        setDatas(datas.map(el => el.id === user_id? {...el, content : el.user_id++}: el));
    };



    return (
        <div>
            {datas?.map(data => <div key={data.id}>
            <div>
                ID: {data.user_id}
                <br />
                이름: {data.user_name}
                <br />
                pw: {data.passwd}
                <br />
                메세지: {data.content}
            </div>
            <button onClick={() => onUpdate(data.user_id)}>수정</button>
            <button onClick={() => onClickRemove(data.user_id)}>삭제</button>
            <hr />
        </div>
        )}
        <input onChange={onChangeUserID} name='user_id' placeholder='user' value={user_id}></input>
        <br/>
        <input onChange={onChangeUserName} name='user_name' placeholder='name' value={user_name}></input>
        <br/>
        <input onChange={onChangePasswd} name='passwd' placeholder='passwd' value={passwd}></input>
        <br/>
        <input onChange={onChangeContent} name='content' placeholder='content' value={content}></input>
        <button onClick={onClickAdd}>추가하기</button>
        </div>
    )
};

export default Message;