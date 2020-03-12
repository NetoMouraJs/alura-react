//	@Imports Utils
import FormValidator from '../../../../core/utils/FormValidator'

//	@Class Main
export default class FormDependecy {
	//	@Method Inicializa as Dependencias do componente
	static inject(dependency:any,method:string) {
		const formValidator = new FormValidator()

		// Validator Injection
		dependency = { formValidator: formValidator[method] }

		return dependency
	}
}
