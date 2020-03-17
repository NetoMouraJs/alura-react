//	@Imports Core
import React from 'react'

//	@Imports Component Core
import {DataTableComponent} from '../core'

//	@Imports Contracts
import {ILivroService} from '../../services/LivroService'

//	@Imports Components
import {HeaderComponent} from '../core'

//	@Imports Entities
import { Livro } from '../../entities/Livro'

interface IProps {
	livroService:ILivroService
}
interface IState {
	livros:Livro[]
}


export default class AutorComponent extends React.Component<IProps,IState>{

	_livroService:ILivroService

	constructor(props:IProps) {
		super(props)

		this._livroService = this.props.livroService

		this.state={livros:[]}
	}
	
	async componentDidMount(){
		this.setState({livros: await this._livroService.indexAsync()})
	}

	render(){
		return (
			<>			
				<HeaderComponent />
				<h1>Autores</h1>
				<DataTableComponent dados={this.state.livros} titulo={'Autores'} colunas={['nome']}/>)
			</>
		)
	}
}
