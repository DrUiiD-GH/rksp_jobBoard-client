import {$authHost, $host} from "./index";


export const fetchVacancies = async ()=>{
    const {data} =  await $host.get('api/vacancy')
    return data.rows
}

export const fetchOneVacancy = async (id)=>{
    const {data} = await $host.get('api/vacancy/'+id)
    return data
}

export const fetchMyVacancies = async (id)=>{
    const {data} = await $authHost.get('api/vacancy/my')
    return data
}

export const deleteVacancy = async (id)=>{
    const {data} = await $authHost.delete('api/vacancy/'+id)
    return data
}

export const createVacancy = async (
    title,
    nameCompany,
    salaryFrom,
    salaryTo,
    contacts,
    categoryId,
    employmentId,
    scheduleId,
    experienceId,
    description
) => {
    const {data} = await $authHost.post('api/vacancy', {
        title,
        nameCompany,
        salaryFrom,
        salaryTo,
        contacts,
        categoryId,
        employmentId,
        scheduleId,
        experienceId,
        description
    })
    return data
}

// export const editVacancy = async (email, password)=>{
//     const {data} = await $host.post('api/user/login', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

