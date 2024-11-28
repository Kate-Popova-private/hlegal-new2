import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {employeesListLoadingSuccess} from "../../store/action/employeesListAction";
import {Link} from "react-router-dom";
import './team.scss';

const Team = () => {
    const dispatch = useDispatch();
    const {employeesList} = useSelector((store) => store.employees);
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://hlegal/api.php?type=employees').then(({data}) => {
            dispatch(employeesListLoadingSuccess(data.result));
            setEmployees(data.result);
        })
    }, [])

    return (<div className="employees">
        <h2 className="employees__title">We are used to taking responsibility and always guarantee honest, timely
            assistance, even in situations where most are powerless.</h2>
        <section className="employees__container">
            {employees.map(item => (
                <Link to={`/employee/${item.id}`} className="employees__employee">
                    <img src={`http://hlegal/${item.img}`} alt="" className="employees__img"/>
                    <span className="employees__name">{item.name}</span>
                    <span className="employees__position">{item.position}</span>
                </Link>
            ))}
        </section>
    </div>);
};
export default Team;