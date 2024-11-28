import React, {useEffect, useState} from 'react';
import './teamMessage.scss';
import axios from "axios";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import LinkArrow from "../LinkArrow";
import {useSelector} from "react-redux";

const TeamMessage = () => {
    const [employeeMessage, setEmployeeMessage] = useState([]);
    const {language} = useSelector((store) => store.language);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'team__container',
    };
    useEffect(() => {
        axios.get(`http://hlegal/api.php?type=employeeMessage&lang=${language}`).then(({data}) => {
            setEmployeeMessage(data.result);
        })
    }, [language])

    return (
        <section className="team-message">
            <Slider {...settings}>
                {employeeMessage.map(item => {
                    return <>
                        <div className="team-message__container">
                            <img src={`http://hlegal/${item.img}`} alt="employee" className="team-message__img"/>
                            <div className="team-message__content">
                                <LinkArrow link="/team" linkName="команда"></LinkArrow>
                                <h2 className="team-message__title">{item.message}</h2>
                                <span className="team-message__author">{item.name}</span>
                                <span className="team-message__author-info">{item.position}</span>
                            </div>
                        </div>
                    </>
                })}
            </Slider>
        </section>
    );
};

export default TeamMessage;