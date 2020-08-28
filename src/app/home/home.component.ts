import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	homeTitle = 'This is you home !';
	valueForFirstInput = 'First Input';
	booleanForSecondInput = true;

	book = {
		title: 'Title',
		author: 'Author'
	};

	sayHello(message) {
		alert(message);
	}

	@Input() owner: string;
	@Output() onYell = new EventEmitter();

	fireYellEvent(e) {
		this.onYell.emit(e);
	}

	constructor() {}

	ngOnInit(): void {}
}
