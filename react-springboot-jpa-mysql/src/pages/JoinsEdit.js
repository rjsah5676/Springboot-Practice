import {useState,useEffect, useRef} from 'react';
import axios from 'axios';

function JoinsEdit() {

    let [JoinsForm,setJoinsForm] = useState({});

    const mounted = useRef(false);
    useEffect(()=> {
        if(!mounted.current) {
            mounted.current=true;
        }else {
            axios.post('http://192.168.1.146:9988/joins/selectUser',{
                id:sessionStorage.getItem("id")
            })
            .then(res => {
                setJoinsForm(res.data);
            })
            .catch(err => console.log(err));
        }
    },[]);
    
    function setFormData(e){
        let name = e.target.name;
        let value = e.target.value;

        setJoinsForm(p => {
            return {...p , [name]:value}
        });
        console.log(JoinsForm);
    }

    const formChk = (e) => {
        e.preventDefault();
        let x=0;
        console.log(JoinsForm.userid);
        if(JoinsForm.userid===''||JoinsForm.userid===undefined) {alert("id 입력"); x=1;}
        else if(JoinsForm.userpw===''||JoinsForm.userpw===undefined) {alert("pw 입력"); x=1;}
        else if(JoinsForm.username===''||JoinsForm.username===undefined) {alert("name 입력"); x=1;}
        else if(JoinsForm.tel===''||JoinsForm.tel===undefined) {alert("tel 입력"); x=1;}
        else if(JoinsForm.email===''||JoinsForm.email===undefined) {alert("email 입력"); x=1;}
        if(x===1) return false;
        axios.post('http://192.168.1.146:9988/joins/EditOk',JoinsForm)
        .then(res => {
            if(res.data==='ok'){
                window.location.href='/';
            }
        })
        .catch(e => {alert("비밀번호가 다릅니다.")});
    }

    return(<div>
        <form onSubmit={formChk}>
            <label>id</label>
            <input type="text" style={{backgroundColor:'red',color:'blue'}} name="userid" readOnly value={JoinsForm.userid} onChange={setFormData}/><br/>
            <label>pw</label>
            <input type="text" style={{backgroundColor:'orange',color:'yellow'}} name="userpw" value={JoinsForm.userpw} onChange={setFormData}/><br/>
            <label>name</label>
            <input type="text" style={{backgroundColor:'yellow',color:'green'}} name="username" readOnly value={JoinsForm.username} onChange={setFormData}/><br/>
            <label>tel</label>
            <input type="text" style={{backgroundColor:'green',color:'blue'}} name="tel" value={JoinsForm.tel} onChange={setFormData}/><br/>
            <label>email</label>
            <input type="text" style={{backgroundColor:'blue',color:'purple'}} name="email" value={JoinsForm.email} onChange={setFormData}/><br/>
            <input type="submit" style={{backgroundColor:'purple',color:'white'}} value="회원 정보수정"/>
        </form>
    </div>);
}

export default JoinsEdit;