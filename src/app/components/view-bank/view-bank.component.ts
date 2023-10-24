import { Component } from '@angular/core';
import { BankDTO } from 'src/app/dto/BankDTO';
import { BankService } from 'src/app/service/bank.service';
import { OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
	selector: 'app-view-bank',
	templateUrl: './view-bank.component.html',
	styleUrls: ['./view-bank.component.css']
})
export class ViewBankComponent implements OnInit {

	public bankDTO: BankDTO;
	public bankId: number;

	constructor(private bankService: BankService, private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.subscribeParams();
	}

	subscribeParams(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.bankId = Number.parseInt(params['bankId']);
			this.findOne();
		})
	}

	findOne(): void {
		this.bankService.fineOneBank(this.bankId).subscribe((data: BankDTO) => {
			this.bankDTO = data;
		})
	}
}
