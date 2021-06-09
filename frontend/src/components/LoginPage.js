import React from "react";
import login_page_icon from "../assets/login_page_icon2.svg";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <>
            <div className='container login-page'>
                <div className='logo-holder'>
                    <img src={login_page_icon} alt='companyLogo' className='companyLogo' />
                </div>
                <div className='login-screen'>
                    <nav>
                        <ul className='login-links'>
                            <li>
                                <Link to='/member'>Member</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Administrator</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
