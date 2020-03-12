import React, { Fragment } from 'react'
import './App.css'

import Table from './components/main/table/tableComponent'
import Form from './components/main/form/Form'

interface IProps {
}

class App extends React.Component<IProps> {

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

	}

	removeAutor = (index: number) => {
		this.setState(
			{
				autores: this.state.autores.filter(
					(autor, posAtual) => {
						return posAtual !== index
					}
				)
			}
		)
	}

	listenSubmit = (autor:any)=>{
		this.setState({autores: [...this.state.autores,autor]})
	}

	render() {
		return (
			<Fragment>
				<Table autores={this.state.autores} removeAutor={this.removeAutor} />
				<Form listenSubmit={this.listenSubmit}/>
			</Fragment>
		)
	}
}

export default App
