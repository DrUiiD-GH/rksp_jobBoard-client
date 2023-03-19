import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import VacancyRow from "./VacancyRow";

const VacancyList = observer(() => {
    const {vacancy} = useContext(Context)
    return (
        <Row className="d-flex flex-column">
            {vacancy.vacancies.map(vac=>
                <VacancyRow key={vac.key} vacancy={vac}/>
            )}
        </Row>
    );
});

export default VacancyList;