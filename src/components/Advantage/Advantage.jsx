import React, {useEffect, useState} from 'react';
import ReactSwipe from "react-swipe";
import {addEventResize} from '../../Functions/functions';
import {advantageList} from '../../localFixtureData/advantageData';
import './advantage.scss';

const Advantage = () => {
    const [mobileLayout, setMobileLayout] = useState(window.outerWidth <= 768);
    const [advantageActive, setAdvantageActive] = useState(advantageList[0]);

    function selectList(e) {
        if (e.target.getAttribute('data-number')) {
            setAdvantageActive(advantageList[e.target.getAttribute('data-number')]);
        }
    }

    useEffect(() => {
        addEventResize(() => window.outerWidth <= 768 ? setMobileLayout(true) : setMobileLayout(false));
    }, []);

    return (mobileLayout === true ?
            <div className="advantage">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 2000,
                    }}
                    childCount={Object.keys(advantageList).length}
                >
                    {advantageList.map(i => {
                        return <div className="advantage__wrapper">
                            <div className="advantage__nav" onClick={(e) => selectList(e)}>
                                <span className="advantage__nav-item" data-number="consistent">{i.name}</span>
                            </div>
                            <div className="advantage__content">
                                <h4 className="advantage__title">{i.title}</h4>
                                <p className="advantage__text">{i.content}</p>
                            </div>
                        </div>
                    })}
                </ReactSwipe>
            </div>
            : <div className="advantage">
                <div className="advantage__nav" onClick={(e) => selectList(e)}>
                    <span className="advantage__nav-item" data-number="0">Consistent</span>
                    <span className="advantage__nav-item" data-number="1">Customer oriented</span>
                    <span className="advantage__nav-item" data-number="2">Innovative</span>
                    <span className="advantage__nav-item" data-number="3">Business oriented</span>
                </div>
                <div className="advantage__content">
                    <h4 className="advantage__title">{advantageActive.title}</h4>
                    <p className="advantage__text">{advantageActive.content}</p>
                </div>
            </div>
    );
};
export default Advantage;