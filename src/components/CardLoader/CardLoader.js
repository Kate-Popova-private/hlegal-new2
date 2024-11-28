import React from "react";
import ContentLoader from "react-content-loader";
import './cardLoader.scss';

const CardLoader = (props) => (
    <section className="card-loader__wrap">
        <ContentLoader
            viewBox="0 0 420 450"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="0" y="0" rx="2" ry="2" width="420" height="200"/>
            <rect x="0" y="230" rx="4" ry="4" width="360" height="20"/>
            <rect x="0" y="265" rx="3" ry="3" width="200" height="15"/>
            <rect x="0" y="314" rx="3" ry="3" width="360" height="66"/>
        </ContentLoader>
    </section>

)

export default CardLoader;