import homeImg from '../img/01.jpg';
import { useState } from 'react';

function Home(){
    const [msg, setMsg] = useState('');
    const onChangeMsg = (event) => {
        setMsg(event.target.value);
      }
    return(
        <>
            <h1>홈페이지 (home.js) </h1>
            <img src={homeImg}/>
            <div>
                <button>Click : Get info from SpringBoot</button>
            </div>
            <h1>받아온 값</h1>
            <div>{msg}</div>
            <input type="text" onChange={onChangeMsg} value={msg} id="msgid"/>
        </>
    );
}

export default Home;