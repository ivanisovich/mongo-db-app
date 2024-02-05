import axios from 'axios';

class MenuService {
  async getMenuList() {
    try {
      const response = await axios.get('http://localhost:3001/menu/get');
      console.log(response)
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  }
}

export default new MenuService();
