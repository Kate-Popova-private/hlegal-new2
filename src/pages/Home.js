import React, {useEffect} from 'react';
import Clients from "../components/Clients/Clients";
import PublicationsList from "../components/PublicationsList/publicationsList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import TeamMessage from "../components/TeamMessage";
import Advantage from "../components/Advantage";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";
import {createAction} from "@reduxjs/toolkit";
import {publicationsNewsSuccess} from "../store/action/publicationListAction";

const Home = () => {
    const {language} = useSelector((store) => store.language);
    let {news} = useSelector((store) => store.publicationsList);
    const dispatch = useDispatch();

    useEffect(() => {
        // if (!news.result.length) {
        axios.get(`http://hlegal/api.php?type=news&lang=${language}&page=1&mode=list&perpage=3`).then(({data}) => {
            dispatch(publicationsNewsSuccess(data));
        })
        // }
    }, [language]);
    return (
        <>
            <div className="background-wrapper">
                <Hero></Hero>
                <Advantage></Advantage>
                <ServicesList/>
            </div>
            <TeamMessage></TeamMessage>
            <Clients/>
            <PublicationsList topPage='news' title="We have something to tell"
                              link={true}></PublicationsList>
        </>
    );
};

export default Home;