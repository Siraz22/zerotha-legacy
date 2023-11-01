import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BankDTO } from '../dto/BankDTO'
import { GlobalConstants } from '../constant/constant';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class BankService {
	constructor(private httpClient: HttpClient) { }
	private bankPath = environment.apiEndpoint + '/banks'

	findAllBanks(): Observable<BankDTO[]> {
		return this.httpClient.get<BankDTO[]>(this.bankPath);
	}

	fineOneBank(bankId: number): Observable<BankDTO> {
		return this.httpClient.get<BankDTO>(this.bankPath + `/${bankId}`);
	}
}
