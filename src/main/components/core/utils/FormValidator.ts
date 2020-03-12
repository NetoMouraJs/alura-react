import validator from 'validator'

import IFormValidator from './FormValidator.interface'

//	@Class Main
export default class FormValidator implements IFormValidator {
	//	@Method Verifica se o Estado não está vazio (Usada estados que controlam INPUT's)
	validator({campo, metodo, validoQuando, messagem}, state ): boolean {

		const campoValor = state[campo.toString()] // Procura o state que ira ser verificado
		const metodoValidacao = validator[metodo]	// Pega a lib Validator e busca o valor do metodo de forma dinamica Ex.. Validator.isEmpty()

		return metodoValidacao(campoValor, [], state) ? false : true
	}
}
