import { AbstractControl, ValidatorFn } from "@angular/forms";

interface ValidationResult {
	[key: string]: boolean
};

export class CustomValidators {
	static validateForbiddenWords(forbiddenWords: string[]): ValidatorFn {
		return (control: AbstractControl): ValidationResult | null => {
			let validationResult: ValidationResult | null;
			if (control.value && forbiddenWords.some(forbiddenWord => control.value.includes(forbiddenWord))) {
				return validationResult = { 'forbiddenWords': true }
			}
			return null;
		}
	}
}

