import { Livro } from '../entities/Livro'

import { ILivroRepository } from '../entities/LivroRepository.interface'

export interface ILivroService extends ILivroRepository{}

export class LivroService implements ILivroService {
	_livroRepository: ILivroRepository;

	constructor(livroRepository: ILivroRepository) {
		this._livroRepository = livroRepository
	}

	GetLivros(): Livro[] {
		return this._livroRepository.GetLivros()
	}

	PostLivros(livros:Livro):boolean{
		return this._livroRepository.PostLivros(livros)
	}
}
