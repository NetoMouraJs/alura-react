export class ValuesFormValidator{
	campo: string
	metodo: string
	validoQuando:boolean
	args?: Object[]
	messagem: string

	constructor(campo:string, metodo:string, args:Object[],validoQuando:boolean, messagem:string ){
		this.campo = campo
		this.metodo = metodo
		this.validoQuando = validoQuando
		this.args = args
		this.messagem = messagem
	}
}
