import React, {useEffect, useState} from 'react';
import MessageForm from "../../components/MessageForm";
import {modalMessageAdd} from "../../store/action/modalMessageAction";
import {useDispatch} from "react-redux";
import './contact.scss';

const Contact = () => {
    const [response, setResponse] = useState({});
    const dispatch = useDispatch();

    function updateResponse(value) {
        setResponse(value);
        console.log('updateResponse', value);
    }

    useEffect(() => {
        if (response.status === 200) {
            console.log('response.status === 200');
            dispatch(modalMessageAdd({message: 'Your request has been sent :)'}));
        }
        if (response.status >= 500) {
            dispatch(modalMessageAdd({message: 'Server error, try you later :('}));
        }
        console.log('useEffect', response);


    }, [response])
    return (
        <div className="contact">
            <section className="contact__info info">
                <div className="info__block">
                    <span className="info__address">Kyiv, Mechnikova str, 14</span>
                </div>
                <div className="info__block">
                    <span className="info__tel">0800 211 927</span>
                    <span className="info__email">contact@forstudy.space</span>
                </div>
                <div className="info__block">
                    <a href="#" className="info__social social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
                            <path fill="#24A3FF"
                                  d="M38.5 19.1161C38.5 8.5586 29.9934 0 19.5 0S.5 8.5586.5 19.1161C.5 28.6575 7.448 36.5659 16.5312 38V24.6419H11.707v-5.5258h4.8242v-4.2115c0-4.791 2.8366-7.4374 7.1766-7.4374 2.0788 0 4.2531.3734 4.2531.3734v4.7044h-2.3958c-2.3603 0-3.0963 1.4735-3.0963 2.9852v3.5859h5.2695l-.8424 5.5258h-4.4271V38C31.552 36.5659 38.5 28.6575 38.5 19.1161Z"/>
                        </svg>
                    </a>
                    <span className="social__text">Our page<br></br> on facebook</span>
                </div>
            </section>
            <section className="contact__form-wrap">
                <h2 className="contact__form-title">We would like to help you</h2>
                <MessageForm onClose={false} updateResponse={updateResponse}></MessageForm>
            </section>
        </div>
    );
};
export default Contact;