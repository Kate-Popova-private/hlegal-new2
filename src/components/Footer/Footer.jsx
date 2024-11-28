import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="address">
                    <span className="footer__state">Kyiv, Mechnikova str., 14/1</span>
                    <a href="/#" className="address__link-on-map">On map</a>
                </div>
                <div className="address">
                    <a href="/#" className="footer__social social">
                        <svg className="social__img" xmlns="http://www.w3.org/2000/svg" width="39" height="38"
                             fill="none">
                            <path fill="#24A3FF"
                                  d="M38.5 19.1161C38.5 8.5586 29.9934 0 19.5 0S.5 8.5586.5 19.1161C.5 28.6575 7.448 36.5659 16.5312 38V24.6419H11.707v-5.5258h4.8242v-4.2115c0-4.791 2.8366-7.4374 7.1766-7.4374 2.0788 0 4.2531.3734 4.2531.3734v4.7044h-2.3958c-2.3603 0-3.0963 1.4735-3.0963 2.9852v3.5859h5.2695l-.8424 5.5258h-4.4271V38C31.552 36.5659 38.5 28.6575 38.5 19.1161Z"/>
                        </svg>
                    </a>
                    <a href="tel:0800211927" className="footer__phone-number phone-number">0800 211 927</a>
                    <a href="/#" className="footer__email">contact@forstudy.space</a>
                </div>
                <span className="copyright">© 2021 HLEGAL Law company, LLC</span>
            </div>
        </footer>
    );
};

export default Footer;