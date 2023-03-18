import {makeAutoObservable} from "mobx";

export default class VacancyStore {
    constructor() {
        this._categories = [
            {id:1, name:'ИТ'},
            {id:2, name:'Медицина'},
            {id:3, name:'Лоистика'}
        ]
        this._employments = [
            {id:1, name:'Полный день'},
            {id:2, name:'Частичная занятость'},
            {id:3, name:'Подработка'}
        ]
        this._experiences = [
            {id:1, name:'Нет опыта'},
            {id:2, name:'от 1 года до 3 лет'},
            {id:3, name:'от 3 лет'}
        ]
        this._schedules = [
            {id:1, name:'Полный дент'},
            {id:2, name:'Сменный график'},
            {id:3, name:'Вахта'}
        ]
        this._vacancies = [
            {id:1, title:'Первая вакансия в ИТ', nameCompany:'Топ 1 ИТ', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:1, employmentId:1, scheduleId:2, experiencesId:2},
            {id:2, title:'Первая вакансия в Медицине', nameCompany:'ГБЗО', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:2, employmentId:2, scheduleId:2, experiencesId:3},
            {id:3, title:'Первая вакансия в Транспорте', nameCompany:'ДорогиВезде', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:3, categoryId:1, employmentId:1, scheduleId:2, experiencesId:1},
            {id:4, title:'Топ проггер', nameCompany:'Топ 1 ИТ', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:1, employmentId:3, scheduleId:1, experiencesId:1},
            {id:5, title:'Вторая вакансия в ИТ', nameCompany:'Топ 1 ИТ', salaryFrom:null, salaryTo:101000, contacts:'email1@1.1', userId:2, categoryId:1, employmentId:1, scheduleId:2, experiencesId:1},
            {id:6, title:'Вторая вакансия в Медицине', nameCompany:'ГБЗО', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:2, employmentId:2, scheduleId:1, experiencesId:2},
            {id:7, title:'Вторая вакансия в Логистике', nameCompany:'ЛекТорПуть', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:3, categoryId:3, employmentId:1, scheduleId:1, experiencesId:1},
            {id:8, title:'Третья вакансия в ИТ', nameCompany:'Топ 1 ИТ', salaryFrom:100000, salaryTo:null, contacts:'email1@1.1', userId:1, categoryId:1, employmentId:1, scheduleId:2, experiencesId:1},
            {id:9, title:'Третья вакансия в Медицине', nameCompany:'Поликлинка', salaryFrom:null, salaryTo:null, contacts:'email1@1.1', userId:4, categoryId:2, employmentId:2, scheduleId:1, experiencesId:3},
            {id:10, title:'Третья вакансия в Логистике', nameCompany:'ТранспортНав', salaryFrom:100000, salaryTo:101000, contacts:'email1@1.1', userId:1, categoryId:3, employmentId:1, scheduleId:2, experiencesId:1}
        ]

        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setEmployments(employments) {
        this._employments = employments
    }

    setExperiences(experiences) {
        this._experiences = experiences
    }

    setSchedules(schedules) {
        this._schedules = schedules
    }

    setVacancies(vacancies) {
        this._vacancies = vacancies
    }

    get categories() {
        return this._categories
    }

    get employments() {
        return this._employments
    }

    get experiences() {
        return this._experiences
    }

    get schedules() {
        return this._schedules
    }

    get vacancies() {
        return this._vacancies
    }

}