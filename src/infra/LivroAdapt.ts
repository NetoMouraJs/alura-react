import { Livro } from '../entities/Livro'

export default class LivroAdapt {
	static adaptArray(dataAxios: any[]): Livro[] {
		let livros = dataAxios.map(
			item => new Livro(item.nome, item.livro, item.preco, item.id)
		)
		return livros
	}
	static adaptOne(dataAxios: any): Livro {
		return new Livro(dataAxios.nome, dataAxios.livro, dataAxios.preco, dataAxios.id)
	}
}