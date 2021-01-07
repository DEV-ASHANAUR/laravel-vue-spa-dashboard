import {http, httpFile} from './http_service';

export function register(data){
    return http().post('/auth/register',data);
} 
export function login(data){
    return http().post('/auth/login',data);
} 
