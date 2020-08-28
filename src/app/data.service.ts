import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private http: HttpClient) {}

	fetchData() {
		return this.http.get(
			'https://learning-angular-186c9.firebaseio.com/.json'
		);
	}
}
