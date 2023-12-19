import Api from './index'
import { TodosList } from './types';

class Users extends Api {
	private readonly endpointUsers = '/users';

	async getUsers(): Promise<TodosList[]> {
		const {data} = await this.api.get<TodosList[]>(this.endpointUsers);
		return data;
	}
}

export default Users;