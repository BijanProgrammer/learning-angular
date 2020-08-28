import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
	selector: 'app-directory',
	templateUrl: './directory.component.html',
	styleUrls: [ './directory.component.css' ]
})
export class DirectoryComponent implements OnInit {
	pStyles = { blue: false, red: true, underline: true };
	checked = true;

	colors = [];

	searchTerm = '';

	clickedOnCheckBox() {
		this.checked = !this.checked;
	}

	constructor(
		private logService: LoggingService,
		private dataService: DataService
	) {}

	logIt() {
		this.logService.log();
	}

	ngOnInit(): void {
		this.dataService
			.fetchData()
			.subscribe((data: any[]) => (this.colors = data));
	}
}
