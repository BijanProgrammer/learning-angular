import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(
		private http: HttpClient,
		private firestore: AngularFirestore
	) {}

	fetchData() {
		return this.http.get(
			'https://learning-angular-186c9.firebaseio.com/.json'
		);
	}

	fsGetColors() {
		return this.firestore
			.collection('/learning-angular-186c9')
			.snapshotChanges();
	}

	fsAddColor(color) {
		return this.firestore.collection('learning-angular').add(color);
	}
}
