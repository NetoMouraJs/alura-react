//	@Imports Core
import React, { Fragment } from 'react'

//	@Imports Css
import './Home.css'

//	@Imports Interfaces
import { ILivroService } from '../../../services/LivroService'

//	@Imports Components
import { TableComponent, FormComponent, HeaderComponent } from './utils/index'
import FormValidator from '../core/utils/FormValidator'

//	@Imports Entities
import { Livro } from '../../../entities/Livro'

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

//	@Class Main
export default class HomeComponent extends React.Component<IProps, IStates> {
	public _livrosService: ILivroService;

	//	@Ctor
	constructor(props: IProps) {
		super(props)

		this._livrosService = this.props.livroService

		this.state = {
			livros: this.props.livroService.GetLivros()
		}
	}

	//	@Method responsavel pela remoçao de um elemento vindo do "Child Component" atraves dos props
	removeLivro = (index: number) => {
		this.setState({
			livros: this.state.livros.filter((livro, posAtual) => {
				return posAtual !== index
			})
		})
	};

	//	@Method, responsavel por pegar os valores do input e inserir dentro do state que armazena os autores
	listenSubmit = (livro: Livro) => {
		try {
			this._livrosService.PostLivros(livro)
			this.setState({ livros: [...this.state.livros, livro] })
		} catch {
			console.error('Erro')
		}
	};

	//	@Method, (React)
	render() {
		return (
			<Fragment>
				<HeaderComponent />
				<div className="container mb-10">
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
