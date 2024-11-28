import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import axios from "axios";
import {employeeCardLoadingSuccess} from "../../store/action/employeeCardAction";
import './employeeCard.scss';

const EmployeeCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {employee} = useSelector(store => store.employeeCard);

    useEffect(() => {
        axios.get(`http://hlegal/api.php?type=employee&id=${id}`).then(({data}) => {
            dispatch(employeeCardLoadingSuccess(data.result));
        })
    }, [id])

    return (
        <div className="card">
            <section className="employee">
                <div className="employee__container">
                    <div className="employee__img-wrap">
                        <img src={`http://hlegal/${employee?.img}`} alt="employee image" className="employee__img"/>
                    </div>
                    <div className="employee__info-wrap">
                        <h2 className="employee__name">{employee?.name}</h2>
                        <span className="employee__position">{employee?.position}</span>
                        <a href="#" className="employee__social">{employee?.email}</a>
                        <a href={employee?.linkedIn} className="employee__social">LinkedIn profile</a>
                    </div>
                    <div className="employee__desription-wrap">
                        <p className="employee__desription">{employee?.aboutMe}</p>
                        <span className="employee__caption">education</span>
                        <p className="employee__desription">{employee?.education}</p>
                        <span className="employee__caption">experience</span>
                        <p className="employee__desription">{employee?.experience}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default EmployeeCard;