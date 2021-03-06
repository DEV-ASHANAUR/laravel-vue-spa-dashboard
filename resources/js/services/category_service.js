import {http, httpFile} from './http_service';

export function createCategory(data){
    return httpFile().post('/category', data);
}
export function loadCategories(){
    return http().get('/category');
}
export function deleteCategory(id){
    return http().delete(`/category/${id}`);
}
export function editCategory(id,data){
    return httpFile().post(`/category/${id}`,data);
}
export function loadMore(nextpage){
    return http().get(`/category?page=${nextpage}`);
}