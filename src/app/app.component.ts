import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Zerotha-Legacy';

	constructor(private router: Router) { }

	public goToBankPage(): void {
		this.router.navigate(['/banks']);
	}

	public goToUsersPage(): void {
		this.router.navigate(['/users']);
	}
}
