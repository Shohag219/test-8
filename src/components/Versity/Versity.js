import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Versity.css';

const Versity = (props) => {
    console.log(props)
    const { name, Motto,
        yearOfEstablishment, permanentCampus, viceChancellor, Website, image, totalEnrollment, ApplicationFee } = props.university;
        const icon = <FontAwesomeIcon icon={faAngleRight} />
    return (
        <div className="col-md-4 jj">
            <div className="card text-center mt-3">
                <img src={image} className="card-img-top text-center" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="mt-3">{Motto}</h5>
                    <h5 className="mt-3">Establish: {yearOfEstablishment}</h5>
                    <h5 className="mt-3">Vice Chancellor: {viceChancellor}</h5>
                    <p className="card-text">Campus: {permanentCampus}</p>
                    <p className="mt-3"><small>Total Sit: {totalEnrollment}</small></p>
                    <h4 className="mt-3">ApplicationFee: {ApplicationFee}</h4>
                    <p className="mt-1"><small>Web: {Website}</small></p>
                    <button onClick={ () => props.handleAddToCard(props.university)} className="btn btn-primary">{icon} Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Versity;