import React from 'react';
import './Progress.scss';
import flagIcon from '../../assets/img/flagIcon.svg';
import portfolioIcon from '../../assets/img/portfolioIcon.svg';
import starIcon from '../../assets/img/starIcon.svg';

const Progress = () => {
    return (
        <section className="progress">
            <div className="progress__bloc">
                <img src={flagIcon} alt="" className="progress__img"/>
                <span className="progress__number">10+</span>
                <span className="progress__text">years of relevant experience</span>
            </div>
            <div className="progress__bloc">
                <img src={portfolioIcon} alt="" className="progress__img"/>
                <span className="progress__number">30+</span>
                <span
                    className="progress__text">active clients who entrust us with their orders on a monthly basis</span>
            </div>
            <div className="progress__bloc">
                <img src={starIcon} alt="" className="progress__img"/>
                <span className="progress__number">500+</span>
                <span className="progress__text">hours of pro bono work annually</span>
            </div>
        </section>
    );
};
export default Progress;