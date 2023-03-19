import {$authHost, $host} from "./index";


export const fetchVacancies = async ()=>{
    const {data} =  await $host.get('api/vacancy')
    return data.rows
}

export const fetchOneVacancy = async (id)=>{
    const {data} = await $host.get('api/vacancy/'+id)
    return data
}
//
// export const deleteVacancy = async (id)=>{
//     const {data} = await $host.post('api/user/login')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

// export const createVacancy = async (email, password)=>{
//     const {data} = await $host.post('api/user/login', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

// export const editVacancy = async (email, password)=>{
//     const {data} = await $host.post('api/user/login', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

