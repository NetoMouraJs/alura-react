import validator from 'validator'

import IFormValidator from './FormValidator.interface'
import { ValuesFormValidator } from './ValuesFormsValidator'

//	@Class Main
export default class FormValidator implements IFormValidator {
	//	@Method Verifica se o Estado não está vazio (Usada estados que controlam INPUT's)
	validator(validatorValues: ValuesFormValidator[], state): boolean {
		const campoValor = state[validatorValues[0].campo.toString()] // Procura o state que ira ser verificado
		const metodoValidacao = validator[validatorValues[0].metodo] // Pega a lib Validator e busca o valor do metodo de forma dinamica Ex.. Validator.isEmpty()

		return metodoValidacao(campoValor, [], state) ? false : true
	}
	// validatorArray(){
	// 	const validacao = {}

	// 	this.validacoes.map(regra=>{
	// 		validacao[regra.campo] = {isInvalid: false,message: ''}
	// 	})

	// 	return {isValid:true,...validacao}
	// }
}
