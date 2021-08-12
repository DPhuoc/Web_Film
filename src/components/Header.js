import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../assets/img/logo-full.png'

import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';

const mainNav = [
    {
        display: "Phim Lẻ",
        path: "/type/movie",
    },
    {
        display: "Phim Bộ",
        path: "/type/show",
    },
    {
        display: "FAQ", 
        path: "/faq",
    }
]

export default function Header() {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathname);

    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        })

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className="header" ref={headerRef}>
            <div className="header__logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="header__menu">
                <div className="header__menu__left">
                    {
                        mainNav.map((item, index) => (
                            <div key={index} className={`header__menu__item ${index === activeNav ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="header__menu__right">
                    <div className="header__menu__item">
                        <Link to="/search">
                            <SearchIcon />
                            <span>Tìm kiếm</span>
                        </Link>
                    </div>
                    <div className="header__menu__item">
                        <Link to="/collection">
                            <span>Bộ Sưu Tập</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
