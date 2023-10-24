import { BankDTO } from "./BankDTO"
import { InvestmentDTO } from "./InvestmentDTO";

export class UserDTO {
	id: number;
	username: string;
	emailAddress: string;
	bankDTOs: BankDTO[];
	investmentDTOs: InvestmentDTO[];
}