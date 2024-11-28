import React, {useEffect, useState} from 'react';
import PublicationsList from "../../components/PublicationsList/publicationsList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
// import {publicationsNewsSuccess} from "../../store/action/publicationListAction";
import {useParams} from "react-router-dom";
import {fullPublicationsSuccess} from "../../store/action/fullPublicationsAction";
import Socials from "../../components/Socials";
import "./publicationCard.scss";
import {createAction} from "@reduxjs/toolkit";
import {publicationsNewsSuccess} from "../../store/action/publicationListAction";

const PublicationCard = () => {
    const {id} = useParams();
    const {language} = useSelector((store) => store.language);
    let {news} = useSelector((store) => store.publicationsList);
    let {publicationCard} = useSelector((store) => store.fullPublications);
    const dispatch = useDispatch();
    let {img, title, paragraph, created_at} = {...publicationCard?.result?.mainContent};
    let {additionalContent} = {...publicationCard?.result};

    useEffect(() => {
        // For recommendation section
        if (news.result.length === 0) {
            axios.get(`http://hlegal/api.php?type=news&lang=${language}&page=1&perpage=3`).then(({data}) => {
                dispatch(publicationsNewsSuccess(data));
            })
        }
        axios.get(`http://hlegal/api.php?type=news&lang=${language}&id=${id}`).then(({data}) => {
            data.result.additionalContent?.sort(function (a, b) {
                return a.position - b.position;
            })
            dispatch(fullPublicationsSuccess(data));

        }).catch((exception) => console.log('exception: ', exception));
    }, [id, language]);

    return (
        <>
            <div className="public-card__wrap">
                <div className="public-card">
                    <img src={`http://hlegal/${img}`} alt="" className="public-card__img"/>
                    <h2 className="public-card__title">{title}</h2>
                    <span className="public-card__date">{created_at}</span>
                    <p className="public-card__paragraph">{paragraph}</p>
                    {additionalContent?.map((item, index) => {
                        switch (item.type) {
                            case 'img':
                                return <img key={`adtnl${index}`} src={`http://hlegal/${item.content}`}
                                            className="public-card__additionalImg"
                                            alt="publication"/>
                            case 'title':
                                return <h2 key={`adtnl${index}`}
                                           className="public-card__additionalTitle">{item.content}</h2>
                            case 'paragraph':
                                return <p key={`adtnl${index}`} className="public-card__paragraph">{item.content}</p>
                            default:
                                break;
                        }
                    })}
                </div>
                <Socials></Socials>
            </div>
            <PublicationsList topPage='news' title="Recommended" link={true}></PublicationsList>
        </>
    );
};
export default PublicationCard;