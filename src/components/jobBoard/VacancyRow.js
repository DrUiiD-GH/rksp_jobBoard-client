import React from 'react';
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {VACANCY_ROUTE} from "../../utils/consts";

export const checkOnSalary = (vacancy)=>{
    if(vacancy.salaryFrom&&vacancy.salaryTo){
        return <div>{vacancy.salaryFrom} - {vacancy.salaryTo} руб.</div>
    }
    if(!vacancy.salaryFrom&&vacancy.salaryTo){
        return <div>До {vacancy.salaryTo} руб.</div>
    }
    if(vacancy.salaryFrom&&!vacancy.salaryTo){
        return <div>От {vacancy.salaryFrom} руб.</div>
    }
    if(!vacancy.salaryFrom&&!vacancy.salaryTo){
        return <div>Зарплата не указана</div>
    }
}

const VacancyRow = ({vacancy}) => {
    return (
        <div className="mb-2">
            <Card border='grey' bg='light' className="p-3" style={{boxShadow:'1px 1px 5px #4344'}}>
                <Card.Title>
                    <NavLink to={VACANCY_ROUTE + '/' + vacancy.id} style={{textDecoration:'none', fontSize:25}} >{vacancy.title}</NavLink>
                </Card.Title>
                <div>
                    <div style={{fontWeight:"bold"}}>
                        {checkOnSalary(vacancy)}
                    </div>
                    <div className='pt-3'>
                        Компания: {vacancy.nameCompany}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default VacancyRow;