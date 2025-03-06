import { useLocation } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import axios from 'axios';

function BoardEdit(){
    const loc = useLocation();
    const mount = useRef(true);
    const [data,setData] = useState({});
    useEffect(()=> {
        if(mount.current) mount.current=false;
        else {
            setData({id:loc.state.id,je:{id:sessionStorage.getItem("id")}, content:loc.state.content, subject:loc.state.subject});
        } 
    },[]);
    const doWrite = (e) =>{
        e.preventDefault();
        if(data.content === '' || data.content === undefined) alert("제목 입력");
        else {
            axios.post('http://192.168.1.146:9988/board/write', data
            )
            .then(res => {
                if(res.data === 'ok') {
                    window.location.href="/board"
                }
            })
            .catch(err => console.log(err))
        }
    }

    const changeData = (e) => {
        console.log(data);
        setData(p => {
            return {...p, [e.target.name]:e.target.value}
        })
    }
    return(
        <div>
            <form onSubmit={doWrite}>
                jemok <input type="text" name="subject" onChange={changeData} value={data.subject}/><br/>
                naeyong <textarea name="content" onChange={changeData} value={data.content}></textarea>
                <input type="submit" value="jakseong"/>
            </form>
        </div>
    );
}

export default BoardEdit;