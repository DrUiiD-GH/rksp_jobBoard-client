import {Button, Card} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {EDIT_VACANCY_ROUTE, MY_VACANCIES_ROUTE, VACANCY_ROUTE} from "../../utils/consts";
import React from "react";
import {checkOnSalary} from "../jobBoard/VacancyRow";
import {observer} from "mobx-react-lite";
import {deleteVacancy, fetchMyVacancies} from "../../http/vacancyApi";

const MyVacancyRow = observer(({vacancy}) => {
    const navigate = useNavigate()
    const removeVacancy = ()=>{
        deleteVacancy(vacancy.id).then(fetchMyVacancies().then(data=>vacancy.vacancies))
    }
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
                    <div className="d-flex justify-content-between mt-3">
                        <Button
                            variant={"outline-warning"}
                            onClick={()=>navigate(EDIT_VACANCY_ROUTE +'/'+ vacancy.id)}
                        >
                            Изменить
                        </Button>
                        <Button
                            variant={"outline-danger"}
                            onClick={()=>removeVacancy()}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
});
export default MyVacancyRow