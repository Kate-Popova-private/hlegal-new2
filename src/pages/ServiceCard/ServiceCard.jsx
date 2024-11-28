import React, {useEffect, useState} from 'react';
import "./serviceCard.scss"
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    serviceLoading,
    serviceLoadingSuccess
} from "../../store/action/serviceAction";
import Loader from "../../components/Loader/Loader";
import PublicationsList from "../../components/PublicationsList/publicationsList";
import axios from "axios";
import ModalForm from "../../components/Modal/ModalForm";
import {modalMessageAdd} from "../../store/action/modalMessageAction";
// import {publicationsNewsSuccess} from "../../store/action/publicationListAction";
import './serviceCard.scss';
import {createAction} from "@reduxjs/toolkit";

const ServiceCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {loading, fullService, error} = useSelector((store) => store.service);
    const {news} = useSelector((store) => store.publicationsList);
    const {img, title, shortDesc, fullDesc} = {...fullService};
    const [modal, setModal] = useState(false);
    const [response, setResponse] = useState({});
    const body = document.querySelector('body');
    const {language} = useSelector((store) => store.language);


    function updateResponse(value) {
        setResponse(value);
    }

    useEffect(() => {
        if (response.status === 200) {
            dispatch(modalMessageAdd({message: 'Your request has been sent :)'}));
        }
        if (response.status >= 500) {
            dispatch(modalMessageAdd({message: 'Server error, try you later :('}));
        }
    }, [response])

    useEffect(() => {
        if (modal) {
            body.style.overflow = 'hidden';
        } else
            body.style.overflow = 'unset';
    }, [modal]);

    useEffect(() => {
        dispatch(serviceLoading());
        axios.get(`http://hlegal/api.php?type=services&id=${id}&lang=${language}`).then(({data}) => {
            dispatch(serviceLoadingSuccess(data.result));
        })
    }, [id, language])

    useEffect(() => {
        if (!news.result.length) {
            axios.get(`http://hlegal/api.php?type=news&lang=${language}&page=1&perpage=3`).then(({data}) => {
                dispatch(createAction(`PUBLICATIONS_NEWS_EN_SUCCESS`)(data));
            })
        }
    }, [language])
    return (
        <>
            <div className="bg-container">
                <section className="service">
                    {loading ? <Loader></Loader>
                        : <div className="service__container">
                            <div className="service__img-wrap">
                                <img src={`http://hlegal/${img}`} alt="service" className="service__img"/>
                            </div>
                            <h4 className="service__title">{title}</h4>
                            <p className="service__content">{shortDesc}</p>
                            <p className="service__content">{fullDesc}</p>
                        </div>
                    }
                    <Link className={"service__btn_free"} onClick={() => setModal(true)}>Free consultation</Link>
                    <aside className="features">
                        <h4 className="features__title">Services in this area:</h4>
                        <div className="features__list-wrap">
                            <div className="features__list">
                                {fullService && fullService.list.split('|').map((item, index) =>
                                    <p className="features__item" key={`ftr_${index}`}>{item}</p>
                                )}
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
            <PublicationsList topPage='news' title="Recommended" link={true}></PublicationsList>
            <ModalForm isOpen={modal} onClose={() => setModal(false)} updateResponse={updateResponse}></ModalForm>
        </>
    );
};
export default ServiceCard;