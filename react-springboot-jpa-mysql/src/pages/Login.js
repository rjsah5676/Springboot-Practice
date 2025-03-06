import '../css/loginStyle.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [userid, setUserId] = useState('1');
  const [userpw, setUserPw] = useState('3ddd4');
  function doLogin(e){
    e.preventDefault();
    if(userid==='') {alert("아이디를 입력하세요"); return false;} 
    else if(userpw==='') {alert("비밀번호를 입력하세요"); return false;}
    axios.post('http://192.168.1.146:9988/joins/loginOk',{
      userid:userid,
      userpw:userpw
    })
    .then(res => {
      console.log(res.data);
      if(res.data === '') {
        alert("실패");
      }
      else {
        sessionStorage.setItem("loginId",res.data.userid);
        sessionStorage.setItem("loginName",res.data.username);
        sessionStorage.setItem("id",res.data.id);
        sessionStorage.setItem("loginStatus","Y");

        window.location.href="/";
      }
    })
    .catch(err => console.log(err));
  }
  const onChangeId = (event) => {
    setUserId(event.target.value);
  }
  const onChangePw = (event) => {
    setUserPw(event.target.value);
  }
  return (
    <div className="App">
      <div className="login-container">
        <div className="left">
          <form onSubmit={doLogin}>
          <ul>
            <li><h2>Login</h2></li>
            <li><input type="text" onChange={onChangeId} value={userid} placeholder='아이디(5~15자리까지 영어, 숫자만 가능)' name="userid" id="userid"/></li>
            <li><input type="password" onChange={onChangePw} value={userpw} placeholder='비밀번호입력' name="userpw" id="userpw"/></li>
            <li><input type="submit" value="login"/></li>
          </ul>
          <ul id="two">
            <li><button>Sign up</button></li> 
            <li><span>find id/pw</span></li>
          </ul>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Login;