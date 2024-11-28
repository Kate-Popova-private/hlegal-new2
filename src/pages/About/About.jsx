import React, {useEffect, useState} from 'react';
import Team from '../../assets/img/About_team.webp'
import Progress from "../../components/Progress";
import Achievements from "../../components/Achievements";
import {addEventResize} from "../../Functions/functions";
import './about.scss';


const About = () => {
    const [slideToShow, setSlideToShow] = useState(window.screen.width >= 768 ? 4 : 1);
    useEffect(() => {
        addEventResize((e) => e.target.innerWidth >= 768 ? setSlideToShow(4) : setSlideToShow(1));
    }, []);
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__content">
                    <h2 className="about__title">We turn over the idea of legal services</h2>
                    <p className="about__text">Consolidating many years of experience and practice, the company's
                        lawyers
                        accompany complex projects and achieve the adoption of a number of decisions that are important
                        for
                        the
                        industry. Many people form the practice of applying the law of the sea in Ukraine.
                        HLEGAL is a reliable business partner, confirmed by stable cooperation with international law
                        firms,
                        the
                        trust of large Ukrainian and international companies, and the recognition of professional
                        ratings.</p>
                </div>
                <Progress></Progress>
            </div>
            <img src={Team} alt="Team group" className="about__img"/>
            <div className="about__container">
                <p className="about__text">The historically unchanged legal profession has begun to reformat in recent
                    years. Clients are feeling this, but law firms are still resisting evolution. Clients need
                    convenience, simplicity, transparent payment. Google, IBM WatsOn, Symantec Clearwell prove that the
                    technological revolution in legal services has begun and is imminent.
                    Quality is what we care about the most.
                    It's simple. If you are unhappy with our work, we will refund your money. We trust our clients. And
                    we want our clients to trust us too.</p>
                <h2 className="about__title">Quality is what we care about the most.</h2>
            </div>
            <Achievements slides={slideToShow}></Achievements>
        </div>
    );
};
export default About;