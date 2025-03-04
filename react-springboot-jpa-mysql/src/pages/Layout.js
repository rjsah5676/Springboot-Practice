import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import '../css/menuStyle.css';
import Footer from './Footer';
import {useState} from 'react';

function Layout(){
    const [test,setTest]= useState('');
    const StyledLink = styled(Link)`
        text-decoration:none;
        &:link, &:visited, &:active{
            color:yellow;
        }
        &:hover{
            color:cyan;
        }
    `;
    const logout = () =>{
        sessionStorage.clear();
        setTest('1');
        if(test===1);
    }
    return(
        <div>
            <div className="Logo"><a href="/">한국 ICT</a></div>
            <nav className="Menu">
                <ul>
                    <li><StyledLink to="/">홈페이지</StyledLink></li>
                    <li><StyledLink to="/">메뉴1</StyledLink></li>
                    <li><StyledLink to="/">메뉴2</StyledLink></li>
                    <li>{sessionStorage.getItem("loginStatus") !== "Y" ? <StyledLink to="/login">로그인</StyledLink> : <StyledLink to="/" onClick={logout}>로그아웃</StyledLink>}</li>
                    <li>{sessionStorage.getItem("loginStatus") !== "Y" ? <StyledLink to="/joinsForm">회원가입</StyledLink> : <StyledLink to="/joinsEdit">회원정보 수정</StyledLink>}</li>
                </ul>
            </nav>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );

}

export default Layout;