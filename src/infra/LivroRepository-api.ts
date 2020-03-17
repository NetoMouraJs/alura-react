//	@Imports Domain
import { ILivroRepository } from '../entities/LivroRepository.interface'
import { Livro } from '../entities/Livro'

//	@Imports Environment
import * as config from '../environment/develop.json'

//	@Imports Utils
import AxiosWrapper from './AxiosWrapper'

//	@Imports Adapters
import LivroAdapt from './LivroAdapt'


export class LivroRepositoryAPI implements ILivroRepository {
	async indexAsync(): Promise<Livro[]> {
		let axiosWrapper = new AxiosWrapper()

		const response = await axiosWrapper.get(`${config.host}/autor`)

		const livros = LivroAdapt.adaptArray(response.data.data)

		return livros
	}

	async storeAsync(livro: Livro): Promise<Livro> {
		let axiosWrapper = new AxiosWrapper()
		
		const response = await axiosWrapper.post(`${config.host}/autor`,livro)

		const livros:Livro = LivroAdapt.adaptOne(response.data.data)

		return livros
	}

	async showAsync(): Promise<Livro[]> {
		throw new Error('Method not implemented.')
	}

	async updateAsync(livro: Livro): Promise<Livro> {
		throw new Error('Method not implemented.')
	}

	async destroyAsync(id: number): Promise<boolean> {
		let axiosWrapper = new AxiosWrapper()
		
		const response = await axiosWrapper.delete(`${config.host}/autor/${id}`)

		if (response.data.message === 'deleted') {
			return true
		}

		return false
	}	
}
