import React, {useEffect, useState} from "react";
import PublicationsList from "../../components/PublicationsList/publicationsList";
import Switch from "../../components/Switch";
import axios from "axios";
import DownloadButton from "../../components/DownloadButton";
import {
    publicationsArticlesSuccess,
    publicationsListFailed,
    publicationsNewsSuccess
} from "../../store/action/publicationListAction";
import {useDispatch, useSelector} from "react-redux";
import {publicationData} from "../../localFixtureData/publicationsData";
import "./publications.scss";
import {createAction} from "@reduxjs/toolkit";

const Publications = () => {
    const {language} = useSelector((store) => store.language);
    const {news, articles} = useSelector((store) => store.publicationsList);
    const [topPage, setTopPage] = useState(publicationData[0]);
    const [loadingPage, setLoadingPage] = useState(topPage.loadingPage);
    const [currentPage, setCurrentPage] = useState(topPage.currentPage);
    const dispatch = useDispatch();


    useEffect(() => {
        switch (topPage.name) {
            case 'news':
                // if ((news.result.length < 6 && currentPage === loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                axios.get(`http://hlegal/api.php?type=${topPage.name}&lang=${language}&page=${topPage.loadingPage}&perpage=6`, {
                    mode: 'no-cors',
                })
                    .then(({data}) => {
                        console.log('ten', data)
                        dispatch(publicationsNewsSuccess(data));
                        topPage.currentPage = loadingPage;
                        topPage.maxPage = data.maxPage;
                    }).catch(function (error) {
                    dispatch(publicationsListFailed(error.message));
                });
                // }
                break;
            case 'article':

                // if ((!articles.result.length && currentPage <= loadingPage) || (loadingPage >= 2 && currentPage < loadingPage)) {
                axios.get(`http://hlegal/api.php?type=${topPage.name}&lang=${language}&page=${topPage.loadingPage}&perpage=6`).then(({data}) => {
                    dispatch(publicationsArticlesSuccess(data));

                    topPage.currentPage = loadingPage;
                    topPage.maxPage = data.maxPage;
                }).catch(function (error) {
                    dispatch(publicationsListFailed(error.message));
                });
                // }
                break;
        }

    }, [topPage, loadingPage, language]);

    useEffect(() => {
        setLoadingPage(topPage.loadingPage);
        setCurrentPage(topPage.currentPage);
        dispatch(publicationsListFailed());
    }, [topPage, language]);

    return (
        <>
            <div className="switch-wrap">
                <Switch isActive={topPage}
                        setActive={setTopPage}></Switch>
            </div>
            <PublicationsList topPage={topPage.name} title={false} link={false}></PublicationsList>
            <div className="download-btn-wrap">
                {topPage.maxPage > topPage.loadingPage &&
                    <DownloadButton pageIncrement={() => setLoadingPage(topPage.loadingPage += 1)}></DownloadButton>}
            </div>
        </>
    );
};
export default Publications;