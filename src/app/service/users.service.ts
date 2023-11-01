import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../dto/UserDTO';
import { GlobalConstants } from '../constant/constant';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private httpClient: HttpClient) { }
	private userPath = environment.apiEndpoint+'/users';

	findAllUsers(): Observable<UserDTO[]> {
		return this.httpClient.get<UserDTO[]>(this.userPath);
	}

	findOneUser(userId: number): Observable<UserDTO> {
		return this.httpClient.get<UserDTO>(this.userPath + `/${userId}`);
	}

	saveUser(userDTO: UserDTO): Observable<UserDTO> {
		return this.httpClient.post<UserDTO>(this.userPath, userDTO);
	}
}
