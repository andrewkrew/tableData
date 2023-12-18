import axios from "axios";

class Api {
	private readonly BASE_URL: string = 'https://jsonplaceholder.typicode.com/';
	api;

	constructor() {
		this.api = axios.create({
			baseURL: this.BASE_URL,
		});
	}
}

export default Api;