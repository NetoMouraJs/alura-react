import { Livro } from './Livro'

export interface ILivroRepository {
	indexAsync(): Promise<Livro[]>
	showAsync(): Promise<Livro[]>
	storeAsync(livro:Livro):Promise<Livro>
	updateAsync(livro:Livro):Promise<Livro>
	destroyAsync(id:number):Promise<boolean>
}

