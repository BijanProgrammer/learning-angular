import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(colors: any[], searchTerm: string): any[] {
		console.log('in filter pipe');

		if (!searchTerm) return colors;

		return colors.filter((color) =>
			color.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}
}
