import axios from 'axios';
import { useUserStore } from '../store/app';
import router from '@/router';

const userStore = useUserStore();

class UserService {
  async register(data) {
    try {
      const response = await axios.post("http://localhost:3001/register", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    try {
      const response = await axios.post("http://localhost:3001/login", data, {
        withCredentials: true
      });
      userStore.setUser(response.data)
      router.push({ path: 'menu' })
      return response.data;
    } catch (error) {
       throw error;
    }
  }

  async checkAuthentication() {
    try {
      const response = await axios.get('http://localhost:3001/validateToken', {
        withCredentials: true,
      });
      userStore.setUser(response.data);
      router.push({ path: 'menu' });
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  }
}

export default new UserService();
