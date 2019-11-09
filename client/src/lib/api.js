import axios from 'axios';
export const fetchTask = () => axios.get('/api/task');