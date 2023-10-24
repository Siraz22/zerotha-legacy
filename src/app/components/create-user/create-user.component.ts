import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/dto/UserDTO';
import { UsersService } from 'src/app/service/users.service';
import { CustomValidators } from 'src/app/shared/custom-validators';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

	public userFormGroup: FormGroup;
	public bankList = [];

	private forbiddenWords = ['admin', 'user', 'superuser', 'root'];

	ngOnInit(): void {
		this.createForm();
	}

	public createForm(): void {
		this.userFormGroup = this.formBuilder.group({
			username: ['', [Validators.required, Validators.minLength(6), CustomValidators.validateForbiddenWords(this.forbiddenWords)]],
			emailAddress: ['', Validators.required],
			addBanks: [false],
		});
	}

	public createUser(): void {
		this.userService.saveUser(this.compileUserDTO()).subscribe(
			(result: UserDTO) => {
				console.log(result);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	public createUserHasBank(): void {
		const banksFormArray = this.userFormGroup.get('banks') as FormArray;
		banksFormArray.push(new FormControl);
	}

	public compileUserDTO(): UserDTO {
		const userDTO: UserDTO = new UserDTO;
		userDTO.username = this.userFormGroup.get('username')?.value;
		userDTO.emailAddress = this.userFormGroup.get('emailAddress')?.value;
		return userDTO;
	}
}
