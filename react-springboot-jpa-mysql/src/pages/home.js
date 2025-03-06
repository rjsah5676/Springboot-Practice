import homeImg from '../img/01.jpg';
import bye from '../img/bye.jpg';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home(){
    useEffect(() => {
        let img = document.getElementById("imgg");
        if(img) {
            img.addEventListener('mouseover', () => {
                img.src = bye;
                img.style.transform = 'scale(2.0)';
                img.style.marginLeft = '300px';
            })
            img.addEventListener('mouseout', () => {
                img.src = homeImg;
                img.style.transform = 'scale(1.0)';
                img.style.marginLeft = '0px';
            })
        }
    },[])
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
            <h1>Home (home.js) </h1>
            <img id="imgg" src={homeImg} alt=""/>
            <div>
                <button onClick={reactSpringTest}>Click : Get info from SpringBoot</button>
                <button onClick={reactSpringTest2}>right</button>
            </div>
            <h1>value</h1>
            <div>{msg}</div>
            <input type="text" onChange={onChangeMsg} value={msg} id="msgid"/>
        </div>
    );
}

export default Home;