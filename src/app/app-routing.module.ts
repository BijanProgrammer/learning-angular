import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
	{ path: 'directory', component: DirectoryComponent },
	{ path: 'hello/:person', component: HelloComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
