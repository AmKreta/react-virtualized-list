import axios from "axios"

export function fetchUsers(){
    return axios({
        url:'https://randomuser.me/api/?results=1000',
        method:'GET'
    });
}