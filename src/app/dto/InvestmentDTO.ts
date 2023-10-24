import { InevstmentType } from "../enum/InvestmentType.enum";
import { CountryDTO } from "./CountryDTO";
import { UserDTO } from "./UserDTO";

export class InvestmentDTO {
	id: number;
	quantity: number;
	averagePrice: number;
	investmentHolder: UserDTO;
	associatedCountry: CountryDTO;
	investmentType: InevstmentType
}