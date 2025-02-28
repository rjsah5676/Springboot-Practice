import homeImg from '../img/01.jpg';
import { useState } from 'react';
import axios from 'axios';

function Home(){
    const [msg, setMsg] = useState('');
    const onChangeMsg = (event) => {
        setMsg(event.target.value);
      }
    function reactSpringTest(){
        axios.get('http://192.168.1.146:9988/reactTest?msg='+msg).then(response => {
            setMsg(response.data);
        })
        .catch(err => console.log(err));
    }
    function reactSpringTest2(){
        axios.get('http://192.168.1.126:9988/reactTest?msg='+msg).then(response => {
            setMsg(response.data);
        })
        .catch(err => console.log(err));
    }
    return(
        <div className='container'>
            <h1>홈페이지 (home.js) </h1>
            <img src={homeImg}/>
            <div>
                <button onClick={reactSpringTest}>Click : Get info from SpringBoot</button>
                <button onClick={reactSpringTest2}>옆</button>
            </div>
            <h1>받아온 값</h1>
            <div>{msg}</div>
            <input type="text" onChange={onChangeMsg} value={msg} id="msgid"/>
        </div>
    );
}

export default Home;