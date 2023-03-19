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

        this._page = 1
        this._totalCount = 0
        this._limit = 6

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

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }

    setLimit(limit){
        this._limit = limit
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


    get selectedCategory(){
        return this._selectedCategory
    }
    get selectedEmployment (){
        return this._selectedEmployment
    }
    get selectedExperience(){
        return this._selectedExperience
    }
    get selectedSchedule(){
        return this._selectedSchedule
    }

    get page(){
        return this._page
    }
    get totalCount (){
        return this._totalCount
    }
    get limit(){
        return this._limit
    }
}