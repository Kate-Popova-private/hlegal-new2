import React from 'react';
import loader from "../../assets/img/Loader.svg";
import './loader.scss'

const Loader = () => {
    return (
        <div className="loader"><img className="loading" src={loader} alt="loading"/></div>
    );
};

export default Loader;