import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { HelloComponent } from './hello/hello.component';

import { FilterPipe } from './filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './logging.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DirectoryComponent,
		HelloComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule
	],
	providers: [ LoggingService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
