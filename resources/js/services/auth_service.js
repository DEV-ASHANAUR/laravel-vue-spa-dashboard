import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';
export function register(data){
    return http().post('/auth/register',data);
} 
export function login(data){
    return http().post('/auth/login',data)
    .then(response =>{
        if(response.status === 200){
            setToken(response.data)
        }
        return response.data;
    });
} 

function setToken(user){
    var token = jwt.sign({ user: 'user' }, 'laravelnewspadhjyfgtryfghdfhyfgfgjhghfdgfgbffgg');
    localStorage.setItem('user-data',token);
}
export function isLoggedIn(){
    const token = localStorage.getItem('user-data');
    return token != null;
}
