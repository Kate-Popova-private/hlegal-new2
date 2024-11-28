import React, {useEffect, useState} from 'react';
import {Link, NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import {useDispatch} from "react-redux";
import './header.scss';
import MobileMenu from "../MobileMenu";
import logoBlack from '../../assets/img/Logo_black.svg';
import logoWhite from '../../assets/img/Logo_white.svg';
import {useTranslation, Trans} from "react-i18next";

const Header = () => {
    const {t, i18n} = useTranslation();

    const location = useLocation();
    const dispatch = useDispatch();
    const [headerTheme, setHeaderTheme] = useState('');
    const [headerBg, setHeaderBg] = useState('');
    const [transpBg, setTranspBg] = useState(false);
    const {id} = useParams();
    //
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const lngs = {
        en: {name: 'EN'},
        ua: {name: 'УК'},
        ru: {name: 'РУ'},
    }

    function changeTheme(location) {
        if (location.pathname.startsWith('/publication')) {
            setHeaderBg('notTransparent');
            setTranspBg(true);
        }
        if (location.pathname === '/' || location.pathname.startsWith('/services') || location.pathname.startsWith('/service')) {
            setHeaderTheme('color-dark');
            setHeaderBg('notTransparent');
            setTranspBg(false);

        } else {
            setHeaderTheme('color-white')
        }
    }

    function openMobileMenu(e) {
        if (e.target === document.querySelector('.nav__hamburger')) {
            document.querySelector('.mobile-nav-wrap').style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        changeTheme(location);
        if (location.pathname === '/') {
            document.querySelector('.header').style.position = 'absolute';
        } else {
            document.querySelector('.header').style.position = 'relative';
        }
    }, [location]);

    return (
        <div className="wrapper">
            {/*<div className="test">{t('hello')}*/}
            {/*    <div className="test"><Trans i18nKey="desc">    Edit <span>src.App.js</span> <code>2 src.App.js 2</code>to*/}
            {/*        reload</Trans></div>*/}
            {/*</div>*/}
            <header
                className={`header${headerBg === 'transparent' ? 'header__remove' : ''} ${transpBg ? 'header__change-bg' : ''}`}>
                <div className="header__container">
                    <div className={`header__language language language_${headerTheme}`}>
                        {Object.keys(lngs).map((lng, index) => (
                            <button key={`lng_${index}`} className={`language__item language__item_${headerTheme}`}
                                    data-language={lng} disabled={i18n.resolvedLanguage === lng}
                                    onClick={() => i18n.changeLanguage(lng)}>{lngs[lng].name}</button>
                        ))}
                    </div>
                    <span className="header__state">{t('data.address')}</span>
                    <a href="tel:0800211927"
                       className={`header__phone-number header__phone-number_${headerTheme} phone-number`}>0800 211
                        927</a>
                    <Link to="/#" className="header__social social">
                        <svg className="social__img" width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            {headerTheme === 'color-dark' ?
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="white"/>
                                :
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="#b3b3ba"/>
                            }
                        </svg>
                    </Link>
                </div>
                <div className="header__container">
                    <Link to="/" className="header__logo logo">
                        <img className="header__logo-name"
                             src={headerTheme === 'color-dark' ? logoWhite : logoBlack}
                             alt="hlegal"/>
                        <Breadcrumbs colorTheme={headerTheme}></Breadcrumbs>
                    </Link>
                    <nav className={`nav header__nav nav_${headerTheme}`}>
                        {headerTheme === 'color-dark' ?
                            <svg onClick={openMobileMenu} className={`nav__hamburger nav__hamburger_${headerTheme}`}
                                 xmlns="http://www.w3.org/2000/svg" width="32" height="33">
                                <path stroke="#fff" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                            </svg>
                            : <svg onClick={openMobileMenu} className={`nav__hamburger nav__hamburger_${headerTheme}`}
                                   xmlns="http://www.w3.org/2000/svg" width="32" height="33">
                                <path stroke="#323264" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                            </svg>
                        }
                        <NavLink to="/about" className="nav__item">{t('main.nav.aboutUs')}</NavLink>
                        <NavLink to="/services" className="nav__item">{t('main.nav.services')}</NavLink>
                        <NavLink to="/team" className="nav__item">{t('main.nav.team')}</NavLink>
                        <NavLink to="/publications" className="nav__item">{t('main.nav.publications')}</NavLink>
                        <NavLink to="/contact" className="nav__item">{t('main.nav.contact')}</NavLink>
                    </nav>
                </div>
            </header>
            <main className="main-content">
                <Outlet/>
            </main>
            <Footer/>
            <MobileMenu></MobileMenu>
        </div>
    );
};

export default Header;