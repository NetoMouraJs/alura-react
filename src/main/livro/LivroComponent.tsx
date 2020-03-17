//	@Imports Core
import React, { Fragment } from 'react'

// @Imports Composer
import LivroComposer from './LivroComposer'

//	@Imports Utils
import PopUp, {
	StatusMessage
} from '../../presentation/utils/PopUpNotification'

//	@Imports Css
import './Livro.css'

//	@Imports Interfaces
import { ILivroService } from '../../services/LivroService'

//	@Imports Components Core
import {
	HeaderComponent,
} from '../core'

//	@Imports Components
import {
	TableComponent,
	FormComponent,
} from './components/index'
import FormValidator from '../../utils/FormValidator'

//	@Imports Entities
import { Livro } from '../../entities/Livro'

//	@Contract Props
interface IProps {
	livroService: ILivroService;
}

//	@Contract States
interface IStates {
	livros: Livro[];
}

//	@Composer
const FormComposer = (): FormValidator => {
	return new FormValidator()
}

export {LivroComposer}

//	@Class Main
export default class LivroComponent extends React.Component<IProps, IStates> {
	public _livrosService: ILivroService;

	constructor(props: IProps) {
		super(props)

		this._livrosService = this.props.livroService

		this.state = { livros: [] }
	}
	async componentDidMount(){
		this.setState({livros: await this.props.livroService.indexAsync()})
	}

	//	@Method responsavel pela remoçao de um elemento vindo do "Child Component" atraves dos props
	removeLivro = async (id: number) => {
		try{
			let wasDeleted = await this.props.livroService.destroyAsync(id)
	
			if(wasDeleted){
				this.setState({
					livros: this.state.livros.filter((livro) => {
						return livro.id !== id
					})
				})
				PopUp.exibeMensagem(StatusMessage.success, 'Removido com Sucesso')
			}else{
				PopUp.exibeMensagem(StatusMessage.error, 'Erro ao remover')
			}
		}catch(err){
			PopUp.exibeMensagem(StatusMessage.error, 'Erro ao se comunicar com o Servidor API')			
		}
	};

	//	@Method, responsavel por pegar os valores do input e inserir dentro do state que armazena os autores
	listenSubmit = async (livro: Livro) => {
		try {
			let livroStored = await this._livrosService.storeAsync(livro)
			this.setState({ livros: [...this.state.livros, livroStored] })

			PopUp.exibeMensagem(StatusMessage.success, 'Incluido com Sucesso')
		} catch {
			PopUp.exibeMensagem(StatusMessage.error, 'Erro ao se comunicar com o Servidor API')	
		}
	};

	render() {
		return (
			<Fragment>
				<HeaderComponent />
				<div className="container mb-10">
					<h1>Casa do Código</h1>
					<TableComponent
						livros={this.state.livros}
						removeLivro={this.removeLivro}
					/>
					<FormComponent
						livroService={this._livrosService}
						formValidator={FormComposer()}
						listenSubmit={this.listenSubmit}
					/>
				</div>
			</Fragment>
		)
	}
}
