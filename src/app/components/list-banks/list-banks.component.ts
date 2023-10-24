import { Component } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { BankDTO } from '../../dto/BankDTO';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Input } from '@angular/core'

@Component({
	selector: 'app-list-banks',
	templateUrl: './list-banks.component.html',
	styleUrls: ['./list-banks.component.css']
})
export class ListBanksComponent implements OnInit {

	@Input()
	public bankDTOs: BankDTO[] = []
	constructor(private bankService: BankService, private router: Router) { }

	ngOnInit(): void {
		this.findAll();
	}

	public findAll(): void {
		this.bankService.findAllBanks().subscribe(
			(data: BankDTO[]) => {
				this.bankDTOs = data;
			}
		);
	}

	public viewBank(bankId: number): void {
		this.router.navigate([`banks/${bankId}`]);
	}
}
