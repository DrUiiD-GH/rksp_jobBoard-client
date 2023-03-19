import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import MyVacancyRow from "./MyVacancyRow";

const MyVacancyList = observer(() => {
    const {vacancy} = useContext(Context)
    return (
        <Row className="d-flex flex-column">
            {
                vacancy.vacancies.map(
                vac => <MyVacancyRow key={vac.key} vacancy={vac}/>
            )}
        </Row>
    );
});

export default MyVacancyList