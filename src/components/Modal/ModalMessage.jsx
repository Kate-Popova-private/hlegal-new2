import React, {useEffect, useState} from 'react';
import Close from "../../assets/img/Close.svg";
import {useSelector} from "react-redux";
import {Transition} from "react-transition-group";

const ModalMessage = () => {

    const {message} = useSelector((store) => store.modalMessage)
    const body = document.querySelector('body');

    const [isOpen, setIsOpen] = useState(false);

    function onWrapperClick(event) {
        if (event.target.classList.contains('modal-wrapper')) {
            setIsOpen(false);
        }
    }

    useEffect(() => {

        console.log('ModalMessage useEffect', message);

        if (Object.keys(message).length) {
            setIsOpen(true);
            body.style.overflow = 'hidden';
        } else
            setIsOpen(false);
        body.style.overflow = 'unset';

    }, [message])

    return (<>
        <Transition in={isOpen} timeout={350} unmountOnExit={true}>
            {(state) =>
                <section className={`modal-wrapper`} onClick={onWrapperClick}>
                    <div className={`modal modal__${state}`}>
                        <h2 className="modal__title">{message.message}</h2>
                        <img src={Close} alt="close button" className="modal__btn-close"
                             onClick={() => setIsOpen(false)}></img>
                    </div>
                </section>
            }
        </Transition>
    </>);
};

export default ModalMessage;