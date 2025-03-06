import { useLocation, Link } from "react-router-dom";
import {useEffect, useRef,useState} from 'react';
import axios from 'axios';

function BoardInfo(){
    const mount = useRef(true);
    const loc = useLocation();
    const [data, setData] = useState({});
    useEffect(()=> {
        if(mount.current) mount.current = !mount.current;
        else { 
            axios.post('http://192.168.1.146:9988/board/info',{id: loc.state.idx})
            .then(res => {
                setData({
                    id:res.data.id,
                    hit:res.data.hit,
                    subject:res.data.subject,
                    content:res.data.content,
                    writedate:res.data.writedate,
                    username:res.data.je.username,
                    userid:res.data.je.userid
                })
            })
            .catch(err => {console.log(err)});
        }
    },[]);
    const boardDel = () => {
        axios.post('http://192.168.1.146:9988/board/delete', {id:loc.state.idx})
        .then(res => {
            if(res.data==='ok') window.location.href="/board";
        })
        .catch(err => console.log(err));
    }
    return(
        <div>
        <pre style={{marginLeft:'200px'}}>
            bunho: {data.id}  johoisu: {data.hit}  jakseongja: {data.username}  jakseongil: {data.writedate}
            <br/>
            jemok: {data.subject}<br/>
            naeyong: {data.content}
        </pre>
        {data.userid === sessionStorage.getItem("loginId") ? <div style={{textAlign:'center'}}><Link onClick={boardDel}>delete</Link>&nbsp;&nbsp;&nbsp;<Link to={`/boardEdit`} state={data}>edit</Link></div> : <div></div>}
        </div>
    );
}

export default BoardInfo;