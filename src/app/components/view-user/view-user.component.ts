import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDTO } from 'src/app/dto/UserDTO';
import { UsersService } from 'src/app/service/users.service';

@Component({
	selector: 'app-view-user',
	templateUrl: './view-user.component.html',
	styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

	userId: number;
	userDTO: UserDTO;

	ngOnInit(): void {
		this.subscribeParams();
	}

	private subscribeParams(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.userId = Number.parseInt(params['userId']);
			this.findOneUser();
		})
	}

	private findOneUser(): void {
		this.usersService.findOneUser(this.userId).subscribe((userDTO: UserDTO) => {
			this.userDTO = userDTO;
		});
	}
}
