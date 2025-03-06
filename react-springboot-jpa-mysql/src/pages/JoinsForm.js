import {useState} from 'react';
import axios from 'axios';

function JoinsForm() {

    let [JoinsForm,setJoinsForm] = useState({});

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
        axios.post('http://192.168.1.146:9988/joins/formOk',JoinsForm)
        .then(res => {
            if(res.data==='ok'){
                window.location.href='/login';
            }
        })
        .catch(e => console.log(e));
    }

    return(<div>
        <form onSubmit={formChk}>
            <label>id</label>
            <input type="text" style={{backgroundColor:'red',color:'blue'}} name="userid" value={JoinsForm.userid} onChange={setFormData}/><br/>
            <label>pw</label>
            <input type="text" style={{backgroundColor:'orange',color:'yellow'}} name="userpw" value={JoinsForm.userpw} onChange={setFormData}/><br/>
            <label>name</label>
            <input type="text" style={{backgroundColor:'yellow',color:'green'}} name="username" value={JoinsForm.username} onChange={setFormData}/><br/>
            <label>tel</label>
            <input type="text" style={{backgroundColor:'green',color:'blue'}} name="tel" value={JoinsForm.tel} onChange={setFormData}/><br/>
            <label>email</label>
            <input type="text" style={{backgroundColor:'blue',color:'purple'}} name="email" value={JoinsForm.email} onChange={setFormData}/><br/>
            <input type="submit" style={{backgroundColor:'purple',color:'white'}} value="회원 등록"/>
        </form>
    </div>);
}

export default JoinsForm;