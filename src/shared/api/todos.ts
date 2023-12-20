import Api from './index'
import { SearchTodosParams, TodosData } from './types';

class Todos extends Api {
	private readonly endpointTodos = '/todos';

	async getTodos({page = 1, search, status = '', sortBy, order}: SearchTodosParams): Promise<TodosData> {
		
		const searchApi = search ? `&title_like=${search}` : '';
		const statusApi = status === '' ? '' : (status ? '&completed=true' : '&completed=false');
		const sortApi = (sortBy && order ? `&_sort=${sortBy}&_order=${order}` : '');		
		
		const data = await this.api.get(`${this.endpointTodos}?_page=${page}&_limit=15${searchApi}${statusApi}${sortApi}`);	
		return {
			data: data.data,
			totalCount: data.headers['x-total-count'],
		}
	}
}

export default Todos;