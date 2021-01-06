import {http, httpFile} from './http_service';

export function register(data){
    return http().post('/auth/register',data);
} 
