import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {servicesListSuccess} from "../../store/action/servicesListAction";
import Loader from "../Loader/Loader";
import axios from "axios";
import {Link} from "react-router-dom";
import './servicesList.scss';
import LinkArrow from "../LinkArrow";

const ServicesList = () => {
    const {loading, servicesList, error} = useSelector((store) => store.services);
    const {language} = useSelector((store) => store.language);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://hlegal/api.php?type=services&lang=${language}`).then(({data}) => {
            dispatch(servicesListSuccess(data));
        })
    }, [language]);

    return (
        <section className="services">
            <LinkArrow link="/services" linkName="services"></LinkArrow>
            <h2 className="services__title">What can we do better than others?</h2>
            <div className="services__container">
                {loading ? <Loader></Loader>
                    : servicesList && servicesList['result'].map((service, index) => (
                    <div className="service-card">
                        <Link to={`/service/${service.id}`}>
                            <div className="service-card__img-wrap">
                                <img src={`http://hlegal/${service.img}`} alt="service"
                                     className="service-card__img"/>
                            </div>
                            <h4 className="service-card__title">{service.title}</h4>
                            <p className="service-card__content">{service.shortDesc}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesList;