import React, {useEffect, useState} from 'react';
import './modalForm.scss';
import Close from "../../assets/img/Close.svg";
import MessageForm from "../MessageForm";


const ModalForm = ({isOpen, onClose, updateResponse}) => {

    function closeForm(e) {
        if (e.target === document.querySelector('.modal-wrapper')) onClose(false)
    }

    return (
        <>
            {isOpen && (
                <section className="modal-wrapper" onClick={closeForm}>
                    <div className="modal">
                        <h2 className="modal__title">We would like to help you</h2>
                        <img src={Close} alt="close button" className="modal__btn-close"
                             onClick={() => onClose(false)}></img>
                        <MessageForm onClose={onClose} updateResponse={updateResponse}></MessageForm>
                    </div>
                </section>
            )}
        </>
    );
};

export default ModalForm;