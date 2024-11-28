import React from 'react';
import {clientList} from "../../localFixtureData/clientsData";
import './clients.scss';


const Clients = () => {
    return (
        <section className="clients">
            <h4 className="clients__title">They already trust us</h4>
            <div className="clients__container">
                {clientList.map((i, index) => {
                    return <div key={`clnt${index}`} className="clients__item" style={{background: `${i.bg}`}}>
                        <img className="clients__img" src={i.src} alt={i.alt}/>
                    </div>
                })}
            </div>
        </section>
    );
};

export default Clients;