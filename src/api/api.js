import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001/'
})

export const usersAPI = {
    getUsers() {
        return instance.get(`users`).then(response => response.data.users);
    },
    createUser(user) {
        return instance.post(`users`, {...user }).then(response => response.data);
    },
    deleteUser(id) {
        return instance.delete(`users`, { data: { id: id }}, );
    },
    updateUser(user) {
        return instance.put(`users`, {...user}).then(response => response.data);
    }
}

