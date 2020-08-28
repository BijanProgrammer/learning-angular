import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-hello',
	templateUrl: './hello.component.html',
	styleUrls: [ './hello.component.css' ]
})
export class HelloComponent implements OnInit {
	person: string;

	constructor(private route: ActivatedRoute) {
		this.person = route.snapshot.params['person'];
	}

	ngOnInit(): void {}
}
