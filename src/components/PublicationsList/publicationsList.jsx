import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import LinkArrow from "../LinkArrow";
import './publications.scss';
import CardLoader from "../CardLoader";

const PublicationsList = (props) => {
    const {language} = useSelector((store) => store.language);
    let {loading, news, articles, error} = useSelector((store) => store.publicationsList);

    return (
        <section className="publications">
            <div className="publications__wrap">
                {props.link && <LinkArrow link={"/publications"} linkName={"Publications"}/>}
                {props.title && <h4 className="publications__title">{props.title}</h4>}
                <div className="publications__container">
                    {loading ? <><CardLoader/> <CardLoader/> <CardLoader/></>
                        : (props.topPage === 'news' ? news?.result : articles?.result)?.map((item, index) =>
                            <Link className="publication" key={`pblc_${index}`} to={`/publication/${item.id}`}>
                                <img className="publication__img" src={`http://hlegal/${item.img}`}
                                     alt="publication"/>
                                <h5 className="publication__title">{item.title}</h5>
                                <span className="publication__date">{item.created_at}</span>
                                <p className="publication__shortDesc">{item.shortDesc}</p>
                            </Link>
                        )}
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </section>
    );
};
export default PublicationsList;