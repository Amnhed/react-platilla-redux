import axios from "axios"

const BASE_URL = 'http://localhost:8080/users';

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const saveUser = async({username, email, password}) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
        });
    } catch (error) {
        //console.error(error);
        throw error;
    }
    
}

export const updateUser = async({ id, username, email }) => {
    try {
        return await axios.put(`${BASE_URL}/update/${id}`,{
            username,
            email,
        })
    } catch (error) {
        //console.log(error);
        throw error;
    }
    
}

export const removeUser = async(id) => {
    try {
        return await axios.delete(`${BASE_URL}/delete/${id}`)
    } catch (error) {
        console.log(error);
    }
    return undefined;
}