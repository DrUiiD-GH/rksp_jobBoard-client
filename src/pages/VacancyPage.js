import React, {useContext} from 'react';
import {Card, Container} from "react-bootstrap";
import {checkOnSalary} from "../components/jobBoard/VacancyRow";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const VacancyPage = observer(() => {
    const {vacancy} = useContext(Context)
    const vacancy_info = {id:1, title:'Первая вакансия в ИТ', nameCompany:'Топ 1 ИТ', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:1, employmentId:1, scheduleId:2, experienceId:2}
        return (
        <Container style={{width:800}}>
            <Card border='grey' bg='light' className="p-4 mt-3" style={{boxShadow:'1px 1px 5px #4344' }}>
                <Card.Title>
                    <div style={{fontWeight:"bolder", fontSize:38}}>{vacancy_info.title}</div>
                </Card.Title>
                <div style={{paddingLeft:5}}>
                    <div style={{fontSize:26}}>
                        {checkOnSalary(vacancy_info)}
                    </div>
                    <div className="pt-1" style={{paddingLeft:5, fontSize:18}}>
                        {vacancy_info.nameCompany}
                    </div>

                    <div className="mt-3 mb-3" style={{paddingLeft:10}}>
                        <div>
                            {vacancy.employments.map(employment => {
                                if (employment.id === vacancy_info.employmentId) {
                                    return <div key={employment.id}>Занятость: {employment.name}</div>
                                } return <div/>
                            })}
                        </div>
                        <div>
                            {vacancy.schedules.map(schedule => {
                                if (schedule.id === vacancy_info.scheduleId) {
                                    return <div key={schedule.id}>График работы: {schedule.name}</div>
                                } return <div/>
                            })}
                        </div>
                        <div>
                            {vacancy.experiences.map(experience => {
                                if (experience.id === vacancy_info.experienceId) {
                                    return <div key={experience.id}>Опыт работы: {experience.name}</div>
                                } return <div/>
                            })}
                        </div>
                    </div>
                    <div>
                        Контакты: {vacancy_info.contacts}
                    </div>
                </div>
            </Card>
            <div>

            </div>
        </Container>
    );
});

export default VacancyPage;