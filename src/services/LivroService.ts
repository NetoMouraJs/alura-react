import { Livro } from '../entities/Livro'

import { ILivroRepository } from '../entities/LivroRepository.interface'

export interface ILivroService extends ILivroRepository {}

export class LivroService implements ILivroService {
	_livroRepository: ILivroRepository;

	constructor(livroRepository: ILivroRepository) {
		this._livroRepository = livroRepository
	}
	async indexAsync(): Promise<Livro[]> {
		return await this._livroRepository.indexAsync()
	}
	async showAsync(): Promise<Livro[]> {
		throw new Error('Method not implemented.')
	}
	async storeAsync(livro: Livro): Promise<Livro> {
		return await this._livroRepository.storeAsync(livro)
	}
	async updateAsync(livro: Livro): Promise<Livro> {
		throw new Error('Method not implemented.')
	}
	async destroyAsync(id: number): Promise<boolean> {
		return await this._livroRepository.destroyAsync(id)
	}
}
