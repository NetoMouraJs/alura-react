//	@Imports Core
import React, { Fragment } from 'react'

//	@Imports Css
import './Home.css'

//	@Imports Components
import { TableComponent, FormComponent, HeaderComponent } from './utils/index'

//	@Contract Props
interface IProps {}

//	@Class Main
export default class HomeComponent extends React.Component<IProps> {

	//	@Ctor
	constructor(props: IProps) {
		super(props)
		console.log('App Running')
	}

	state = {
		autores: [
			{
				nome: 'Paulo',
				livro: 'React',
				preco: 1000
			},
			{
				nome: 'Daniel',
				livro: 'Java',
				preco: 99
			},
			{
				nome: 'Marcos',
				livro: 'Design',
				preco: 150
			},
			{
				nome: 'Bruno',
				livro: 'DevOps',
				preco: 100
			}
		]
	};

	//	@Method responsavel pela remoçao de um elemento vindo do "Child Component" atraves dos props
	removeAutor = (index: number) => {
		this.setState({
			autores: this.state.autores.filter((autor, posAtual) => {
				return posAtual !== index
			})
		})
	};

	//	@Method, responsavel por pegar os valores do input e inserir dentro do state que armazena os autores
	listenSubmit = (autor: any) => {
		this.setState({ autores: [...this.state.autores, autor] })
	};

	//	@Method, (React)
	render() {
		return (
			<Fragment>
				<HeaderComponent />
				<div className="container mb-10">
					<TableComponent
						autores={this.state.autores}
						removeAutor={this.removeAutor}
					/>
					<FormComponent listenSubmit={this.listenSubmit} />
				</div>
			</Fragment>
		)
	}
}
