import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListBanksComponent } from './components/list-banks/list-banks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBankComponent } from './components/view-bank/view-bank.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: 'users', component: ListUsersComponent },
	{ path: 'users/create', component: CreateUserComponent },
	{ path: 'users/:userId', component: ViewUserComponent, pathMatch: 'prefix' },
	{ path: 'banks/:bankId', component: ViewBankComponent, pathMatch: 'prefix' },
	{ path: 'banks', component: ListBanksComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ListUsersComponent, ViewUserComponent, CreateUserComponent, ListBanksComponent, ViewBankComponent, PageNotFoundComponent]