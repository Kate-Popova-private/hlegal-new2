import React from 'react';
import Clients from "../components/Clients/Clients";
import ServicesList from "../components/ServicesList";

const Services = () => {
    return (
        <>
            <div className="bg-container">
                <ServicesList/>
            </div>
            <Clients/>
        </>
    );
};

export default Services;