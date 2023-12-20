export interface TodosList {
	userId: number,
	id: number,
	title: string,
	completed: boolean,
}

export interface TodosData{
	data: TodosList[],
	totalCount: string,
}

export interface SearchTodosParams {
	page: number,
	search: string,
	status: boolean | '',
	// status: boolean | undefined,
	sortBy: 'id' | 'title',
	order: 'asc' | 'desc',
}

export interface UserList {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string,
		}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string,
	}
}