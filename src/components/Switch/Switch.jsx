import React from 'react';
import {Link} from "react-router-dom";
import "./switch.scss";
import {publicationData} from "../../localFixtureData/publicationsData";


const Switch = ({isActive, setActive}) => {
    return (
        <div className="switch">
            {publicationData.map((item, index) => {
                return <Link key={`swtch${index}`} onClick={() => setActive(item)}
                             className={isActive.name === item.name ? "switch__link switch__link_active" : "switch__link"}
                             to="">{item.name}</Link>
            })}
            {/*<Link onClick={() => setActive(newsData)}*/}
            {/*      className={isActive.name === switch1 ? "switch__link switch__link_active" : "switch__link"}*/}
            {/*      to="">{switch1}</Link>*/}
            {/*<Link onClick={() => setActive(articlesData)}*/}
            {/*      className={isActive.name === switch2 ? "switch__link switch__link_active" : "switch__link"}*/}
            {/*      to="">{switch2}</Link>*/}
        </div>
    );
};

export default Switch;