import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export default {
    fetchCategory() {
        return axios.get(`${API_BASE_URL}/categories`);
    },
    addCategory(category) {
        return axios.post(`${API_BASE_URL}/categories`, {category});
    },
    updateCategory(category) {
        return axios.patch(`${API_BASE_URL}/categories/${category.id}`, {category});
    },
    deleteCategory(category) {
        return axios.delete(`${API_BASE_URL}/categories/${category.id}`);
    },
    
    fetchItem() {
        return axios.get(`${API_BASE_URL}/items`);
    },
    addItem(item) {
        return axios.post(`${API_BASE_URL}/items`, {item});
    },
    updateItem(item) {
        return axios.patch(`${API_BASE_URL}/items/${item.id}`, {item});
    },
    deleteItem(item) {
        return axios.delete(`${API_BASE_URL}/items/${item.id}`);
    }
};