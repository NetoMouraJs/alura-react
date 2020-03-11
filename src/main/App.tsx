import React from 'react'
import './App.css'

import Table from './components/main/table/tableComponent'

interface IProps {
	name?:string,
	autores?:any
}

class App extends React.Component<IProps> {

	constructor(props:IProps) {
		super(props)
		console.log('App Running')
	}

	state = {
		autores: [
			{
				nome:'Paulo',
				livro:'React',
				preco:1000
			},
			{
				nome:'Daniel',
				livro:'Java',
				preco:99
			},
			{
				nome:'Marcos',
				livro:'Design',
				preco:150
			},
			{
				nome:'Bruno',
				livro:'DevOps',
				preco:100
			}
		]

	}

	removeAutor = (index:number) =>{
		this.setState(
			{
				autores: this.state.autores.filter(
					(autor, posAtual) =>{
						return posAtual !== index
					}
				)
			}
		)
	}

	render(){
		return (
			<div className="App">
				<Table autores = { this.state.autores } removeAutor = { this.removeAutor }/>
			</div>
		)
	}
}

export default App
