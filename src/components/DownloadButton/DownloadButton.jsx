import React from 'react';
import "./downloadButton.scss";

const DownloadButton = (props) => {


    return (
        <button onClick={props.pageIncrement} className='download-btn'>
            More publications
        </button>
    );
};

export default DownloadButton;