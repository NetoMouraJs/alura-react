//	@Imports Core
import React,{Fragment} from 'react'

//	@Imports Component Core
import {DataTableComponent} from '../core'

//	@Imports Contracts
import {ILivroService} from '../../services/LivroService'

//	@Imports Components
import {HeaderComponent} from '../core'

interface IProps {
	livroService:ILivroService
}


export default class AutorComponent extends React.Component<IProps>{

	_livroService:ILivroService

	constructor(props:IProps) {
		super(props)

		this._livroService = this.props.livroService
	}

	render(){
		return (
			<Fragment>
				<HeaderComponent />
				<h1>Autores</h1>
				<DataTableComponent dados={this._livroService.GetLivros()} titulo={'Autores'} colunas={['nome']}/>)
			</Fragment>
		)
	}
}
