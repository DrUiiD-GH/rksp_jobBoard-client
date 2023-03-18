import {$authHost, $host} from "./index";

export const fetchEmployments = async ()=>{
    const {data} =  await $host.get('api/employment')
    return data
}
export const fetchCategories = async ()=>{
    const {data} =  await $host.get('api/category')
    return data
}
export const fetchExperience = async ()=>{
    const {data} =  await $host.get('api/experience')
    return data
}
export const fetchSchedules = async ()=>{
    const {data} =  await $host.get('api/schedule')
    return data
}


