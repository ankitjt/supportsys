import React from "react";
import { SidebarData } from "./MemberNavbarData";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const MemberNavbar = () => {
    return (
        <div className='member-navbar'>
            {SidebarData.map((links, index1) => {
                return (
                    <>
                        <Link to={links.path} key={index1} className='navbar-links'>
                            <div>
                                <span className='links-logo'>{links.icon}</span>
                                <span> {links.title}</span>
                            </div>
                            {/* <span>
                                {links.subMenu && innerLinks
                                    ? links.iconOpened
                                    : links.subMenu
                                    ? links.iconClosed
                                    : null}
                            </span> */}
                        </Link>
                        <div className='navbar-inner'>
                            {links.subMenu &&
                                links.subMenu.map((subLinks, index2) => {
                                    return (
                                        <NavLink to={subLinks.path} key={index2} className='navbar-inner-links'>
                                            <span className='links-logo'>{subLinks.icon}</span>
                                            {subLinks.title}
                                        </NavLink>
                                    );
                                })}
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default MemberNavbar;
