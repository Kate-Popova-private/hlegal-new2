import React from "react";
import {useSelector} from "react-redux";
import './hero.scss';
import {useTranslation} from "react-i18next";

const Hero = () => {
    const {t, i18n} = useTranslation();

    return <section className="hero">
        <h2 className="hero__title">{t('hero.title')}</h2>
        <a href="/#" className="hero__scroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                <g stroke="#fff" strokeWidth="2" clipPath="url(#a)">
                    <circle cx="21" cy="21" r="20" opacity=".5"/>
                    <path d="m12 18 9 9 9-9"/>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h42v42H0z"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    </section>
}
export default Hero;