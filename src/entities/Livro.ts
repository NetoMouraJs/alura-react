export class Livro {
	id?: number
	nome: string;
	livro: string;
	preco: number;
	constructor(nome: string, livro: string, preco: number, id?:number) {
		this.id = id
		this.nome = nome
		this.livro = livro
		this.preco = preco
	}
}
