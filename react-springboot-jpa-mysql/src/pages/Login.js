import '../css/loginStyle.css';
import { useState } from 'react';
import image from '../img/01.jpg';

function Login() {

  const [userid, setUserId] = useState('');
  const [userpw, setUserPw] = useState('');
  function doLogin(){
    if(userid=='') alert("아이디를 입력하세요"); 
    else if(userpw=='') alert("비밀번호를 입력하세요");
    else {
      let regex = /^[a-zA-Z]{1}[a-zA-Z0-9_#$]{4,9}$/;
      if(!regex.test(userid)) {
        alert("올바른 아이디 형식을 입력해주세요");
      }
    }
  }
  const onChangeId = (event) => {
    setUserId(event.target.value);
  }
  const onChangePw = (event) => {
    setUserPw(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <ul>
            <li><h2>로그인</h2></li>
            <li><input type="text" onChange={onChangeId} value={userid} placeholder='아이디(5~15자리까지 영어, 숫자만 가능)' id="userid"/></li>
            <li><input type="password" onChange={onChangePw} value={userpw} placeholder='비밀번호입력' id="userpw"/></li>
            <li><button id="login-button" onClick={()=>{doLogin()}}>로그인</button></li>
          </ul>
          <ul id="two">
            <li><button>회원가입</button></li> 
            <li><span>아이디/비밀번호 찾기</span></li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Login;