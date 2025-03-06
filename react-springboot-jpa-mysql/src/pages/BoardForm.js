import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

function BoardForm(){
    const mounted = useRef(true);
    useEffect(()=> {
        if(mounted.current) mounted.current = !mounted.current;
        else {
            setData({je:{id:sessionStorage.getItem("id")}});
        }
    },[]);
    const [data, setData] = useState({});

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
        setData(p => {
            return {...p, [e.target.name]:e.target.value}
        })
        console.log(data);
    }

    return(<div>
        <form onSubmit={doWrite}>
            jemok <input type="text" name="subject" onChange={changeData}/><br/>
            naeyong <textarea name="content" onChange={changeData}></textarea>
            <input type="submit" value="jakseong"/>
        </form>
    </div>);
}

export default BoardForm;