export class ValuesFormValidator{
	campo: string
	metodo: string
	validoQuando:boolean
	messagem:string

	constructor(campo:string,metodo:string,validoQuando:boolean,messagem:string){
		this.campo = campo
		this.metodo = metodo
		this.validoQuando = validoQuando
		this.messagem = messagem
	}
}