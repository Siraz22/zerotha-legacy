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
	public userDTO: UserDTO;
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
			banks: new FormArray;
		});
	}

	public createUser(): void {
		this.userService.saveUser(this.userDTO).subscribe(
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
}
