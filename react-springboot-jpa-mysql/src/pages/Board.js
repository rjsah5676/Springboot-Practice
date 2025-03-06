import {Link} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

function Board(){
    const [data,setData] = useState([]);
    const [pageno, setPageno] = useState([]);
    const [nowPage, setNowPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [searchWord, setSearchWord] = useState('');
    const mt = useRef(true);

    useEffect(() => {
        if(mt.current) mt.current = !mt.current;
        else {
            getBoardList(1);
        }
    },[])

    function searchWordChange(e){setSearchWord(e.target.value); console.log(searchWord)};

    const getBoardList = (page) => {
        setData([]);
        let url = 'http://192.168.1.146:9988/board/list?nowPage='+page;
        if(searchWord !== null && searchWord !== '') url+= "&searchWord="+searchWord;
        axios.get(url)
        .then(res => {
            res.data.list.forEach(item => {
                setData(p => [...p, item]);
            })
            setPageno([]);
            let pVO = res.data.pVO;
            for(let p=pVO.startPageNum; p<pVO.startPageNum+pVO.onePageCount;p++) {
                if(p<=pVO.totalPage)setPageno(pr=>[...pr,p]);
            }
            setNowPage(pVO.nowPage);
            setTotalPage(pVO.totalPage);
        })
        .catch()
    }

    const makeList = () => {
        const li = data.map((item) => (
            <ul className="boards">
                <li>{item.id}</li>
                <li><Link to={`/boardInfo`} state={{idx:item.id}}>{item.subject}</Link></li>
                <li>{item.je.userid}</li>
                <li>{item.hit}</li>
                <li>{item.writedate}</li>
            </ul>
        ));
        return li;
    }
    return (
        <div>
            <ul className="boards" style={{border:'none'}}><li><select name="searchKey">
                    <option value="subject">subject</option>
                    <option value="userid">userid</option>
                    <option value="content">content</option>
                </select></li><li><input type="text" name="searchWord" onChange={searchWordChange}/></li><li><input type="button" onClick={()=>{getBoardList(1)}} value="search"></input></li><li></li><li>{sessionStorage.getItem("loginStatus") !== "Y" ? <div></div> : <Link to='/boardForm'>write</Link>}</li></ul>
            <ul className="boards">
                <li>no</li>
                <li>subject</li>
                <li>who</li>
                <li>hit</li>
                <li>writedate</li>
            </ul>
            {makeList()}
            <ul style={{display:'flex', justifyContent:'center'}}>
                {
                    (function(){
                        if(nowPage>1)
                            return  (<li onClick={()=>getBoardList(nowPage-1)}>
                                    prev
                                </li>)
                    })()
                }
                {
                    pageno.map(function(pg) {
                        return <li style={{padding:'10px'}} onClick={() => {getBoardList(pg)}}>{pg}</li>
                    })
                }
                  {
                    (function(){
                        if(nowPage<totalPage)
                            return  (<li onClick={()=>getBoardList(nowPage+1)}>
                                    next
                                </li>)
                    })()
                }
            </ul>
        </div>
    );
}

export default Board;