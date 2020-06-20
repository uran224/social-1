import React from 'react';
import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e2b3d190-cb24-4f5f-ab79-ee47dffe5fb5"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return response.data;   // мы возвращаем не весь response, а только его data (цепочка промисов)
            });
    }
}


// homework for follow-unfollow
export const getUsers2 = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;   
        });
}


// this file is DAL - Data Access Layer

