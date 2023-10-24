import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ViewBankComponent } from './components/view-bank/view-bank.component';
import { BankService } from './service/bank.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
	declarations: [
		AppComponent,
		...routingComponents,
		ViewBankComponent,
		PageNotFoundComponent,
		ViewUserComponent,
		CreateUserComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
	],
	providers: [UsersService, BankService, FormBuilder],
	bootstrap: [AppComponent]
})
export class AppModule { }
