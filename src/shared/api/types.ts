export interface TodosList {
	userId: number,
	id: number,
	title: string,
	completed: boolean,
}

export interface SearchTodosParams {
	page: number,
	search: string,
	status: boolean | null,
	// sortBy: 'id' | 'title',
	// order: 'asc | desc',
	sortBy: string,
	order: string,
}