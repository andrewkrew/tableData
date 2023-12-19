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
	// status: boolean | undefined,
	sortBy: 'id' | 'title',
	order: 'asc' | 'desc',
}