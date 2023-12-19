import Api from './index'
import { SearchTodosParams, TodosList } from './types';

class Todos extends Api {
	private readonly endpointTodos = '/todos';

	async getTodos({page = 1, search, status = null, sortBy, order}: SearchTodosParams): Promise<TodosList[]> {
		
		const searchApi = search ? `&title_like=${search}` : '';
		const statusApi = status === null ? '' : (status ? '&completed=true' : '&completed=false');
		const sortApi = (sortBy && order ? `&_sort=${sortBy}&_order=${order}` : '');		
		
		const {data} = await this.api.get<TodosList[]>
			(`${this.endpointTodos}?_page=${page}&_limit=15${searchApi}${statusApi}${sortApi}`);
		return data;
	}
}

export default Todos;