import validator from 'validator'

import IFormValidator from './FormValidator.interface'
import { ValuesFormValidator } from './ValuesFormsValidator'

class errorsFound {
	public campo:string
	public messagem:string

	constructor(campo:string,mensagem:string){
		this.campo=campo
		this.messagem=mensagem
	}
}

//	@Class Main
export default class FormValidator implements IFormValidator {
	//	@Method Verifica se o Estado não está vazio (Usada estados que controlam INPUT's)
	validator(validatorValues: ValuesFormValidator[], state):errorsFound[] {

		let invalidValuesFound:errorsFound[] = []

		validatorValues.forEach((regra:ValuesFormValidator) => {

			const campoValor = state[regra.campo.toString()] // Procura o state que ira ser verificado

			const metodoValidacao = validator[regra.metodo] // Pega a lib Validator e busca o valor do metodo de forma dinamica Ex.. Validator.isEmpty()

			let validRule = metodoValidacao(campoValor, ...regra.args || [], state) !== regra.validoQuando

			if(validRule){
				invalidValuesFound = [...invalidValuesFound, {campo: regra.campo, messagem: regra.messagem}]
			}
		})

		return invalidValuesFound
	}


}
