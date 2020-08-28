import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'learning-angular';

	// owner: {
	// 	firstName: 'Bijan';
	// 	lastName: 'Eisapour';
	// };

	owner = 'Bijan';

	yell(e) {
		alert('I am yelling !');
	}
}
