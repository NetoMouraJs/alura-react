export default interface IFormValidator{
	validator(any:validatorValues, state:Object)	//	Any
}

interface validatorValues{
	campo: string,
	metodo: string,
	validoQuando:boolean,
	messagem:string
}
