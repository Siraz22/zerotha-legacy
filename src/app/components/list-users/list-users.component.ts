import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from 'src/app/dto/UserDTO';
import { UsersService } from 'src/app/service/users.service';

@Component({
	selector: 'app-list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
	userDTOs: UserDTO[];

	constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.findAllUsers();
	}

	public viewUser(userId: number) {
		//append the userId to the route
		this.router.navigate([userId], { relativeTo: this.activatedRoute });
	}

	public createUser(): void {
		this.router.navigate(['create'], { relativeTo: this.activatedRoute });
	}

	private findAllUsers(): void {
		this.userService.findAllUsers().subscribe((data: UserDTO[]) => {
			this.userDTOs = data;
		})
	}
}
