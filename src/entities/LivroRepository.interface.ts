import { Livro } from './Livro'

export interface ILivroRepository {
	PostLivros(livro:Livro):boolean
	GetLivros(): Livro[]
}
