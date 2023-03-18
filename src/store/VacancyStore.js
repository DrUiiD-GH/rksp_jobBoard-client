import {makeAutoObservable} from "mobx";

export default class VacancyStore {
    constructor() {
        this._categories = []
        this._employments = []
        this._experiences = []
        this._schedules = []
        this._vacancies = []


        this._selectedCategory = {}
        this._selectedEmployment = {}
        this._selectedExperience = {}
        this._selectedSchedule = {}

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

    setSelectedCategory(selectedCategory){
        this._selectedCategory = selectedCategory
    }
    setSelectedExperience(selectedExperience){
        this._selectedExperience= selectedExperience
    }
    setSelectedEmployment(selectedEmployment){
        this._selectedEmployment = selectedEmployment
    }
    setSelectedSchedule(selectedSchedule){
        this._selectedSchedule = selectedSchedule
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