import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import '../css/menuStyle.css';
import Footer from './Footer';

function Layout(){
    const StyledLink = styled(Link)`
        text-decoration:none;
        &:link, &:visited, &:active{
            color:yellow;
        }
        &:hover{
            color:cyan;
        }
    `;
    const LogoStyledLink = styled(Link)`
        text-decoration:none;
        &:link, &:visited, &:active{
            color:#333;
        }
        &:hover{
            color:red;
        }
    `;
    return(
        <div>
            <div className="Logo"><a href="/">한국 ICT</a></div>
            <nav className="Menu">
                <ul>
                    <li><StyledLink to="/">홈페이지</StyledLink></li>
                    <li><StyledLink to="/">메뉴1</StyledLink></li>
                    <li><StyledLink to="/">메뉴2</StyledLink></li>
                    <li><StyledLink to="/login">로그인</StyledLink></li>
                    <li><StyledLink to="/joinsForm">회원가입</StyledLink></li>
                </ul>
            </nav>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );

}

export default Layout;