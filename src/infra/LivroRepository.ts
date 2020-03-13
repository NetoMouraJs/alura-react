import { Livro } from '../entities/Livro'

import { ILivroRepository } from '../entities/LivroRepository.interface'

export class LivroRepository implements ILivroRepository {
    public DB_FAKE: Livro[] = [
    	{
    		nome: 'React',
    		autor: 'Paulo',
    		preco: 1000
    	},
    	{
    		autor: 'Daniel',
    		nome: 'Java',
    		preco: 99
    	},
    	{
    		autor: 'Marcos',
    		nome: 'Design',
    		preco: 150
    	},
    	{
    		autor: 'Bruno',
    		nome: 'DevOps',
    		preco: 100
    	}
    ]
    GetLivros(): Livro[] {
    	return this.DB_FAKE
    }
    PostLivros(livro:Livro):boolean {
    	this.DB_FAKE = [...this.DB_FAKE, livro]
    	return true
    }
}
