import React, {useEffect, useState} from 'react';
import './mobileMenu.scss';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const MobileMenu = () => {
    const {t, i18n} = useTranslation();
    const mobileNavWrap = document.querySelector('.mobile-nav-wrap');
    const mobileNavItem = document.querySelectorAll('.mobile-nav__item');
    const body = document.querySelector('body');
    for (const element of mobileNavItem) {
        element.addEventListener('click', () => {
            mobileNavWrap.style.display = 'none';
            body.style.overflow = 'unset';
        })
    }

    function closeMobileMenu(e) {
        if (e.target === mobileNavWrap || e.target === document.querySelector('.mobile-nav__btn-close')) {
            mobileNavWrap.style.display = 'none';
            body.style.overflow = 'unset';
        }
    }

    return (
        <div className="mobile-nav-wrap" onClick={closeMobileMenu}>
            <nav className="mobile-nav">
                <svg className="mobile-nav__btn-close" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     fill="none">
                    <path stroke="#EC6F5D" strokeWidth="2" d="m7 7 18 18M25 7 7 25"/>
                </svg>
                <NavLink to="/about" className="mobile-nav__item">{t('main.nav.aboutUs')}</NavLink>
                <NavLink to="/services" className="mobile-nav__item">{t('main.nav.services')}</NavLink>
                <NavLink to="/team" className="mobile-nav__item">{t('main.nav.team')}</NavLink>
                <NavLink to="/publications" className="mobile-nav__item">{t('main.nav.publications')}</NavLink>
                <NavLink to="/contact" className="mobile-nav__item">{t('main.nav.contact')}</NavLink>
            </nav>
        </div>
    );
};

export default MobileMenu;