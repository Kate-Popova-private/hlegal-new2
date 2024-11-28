import React from 'react';
import {NavLink} from "react-router-dom";
import './linkArrow.scss';
const LinkArrow = (props) => {
    return (
        <NavLink to={props.link} className="link-arrow">{props.linkName}</NavLink>
    );
};

export default LinkArrow;