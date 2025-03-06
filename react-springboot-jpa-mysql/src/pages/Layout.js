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
            <div className="Logo"><a href="/">American ICT</a></div>
            <nav className="Menu">
                <ul>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/board">Gesipan</StyledLink></li>
                    <li><StyledLink to="/">Menu</StyledLink></li>
                    <li>{sessionStorage.getItem("loginStatus") !== "Y" ? <StyledLink to="/login">Login</StyledLink> : <StyledLink to="/" onClick={logout}>Logout</StyledLink>}</li>
                    <li>{sessionStorage.getItem("loginStatus") !== "Y" ? <StyledLink to="/joinsForm">Signup</StyledLink> : <StyledLink to="/joinsEdit">Edit</StyledLink>}</li>
                </ul>
            </nav>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );

}

export default Layout;