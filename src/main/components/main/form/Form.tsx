import React from 'react'


interface IProps {
	listenSubmit?:any
 }

interface IStateInicial {
	nome: string
	livro: string
	preco: string
}

interface IState {
	stateInicial: IStateInicial
}

export default class Form extends React.Component<IProps, IStateInicial> {

	public stateInicial: IStateInicial

	constructor(props: any) {
		super(props)

		this.stateInicial = {
			nome: '',
			livro: '',
			preco: ''
		}

		this.state =  this.stateInicial
	}

	onChange = (event:any)=>{
		const { name, value } = event.target

		let newState = {[name]: value} as Pick<IStateInicial, keyof IStateInicial>

		this.setState(newState)
	}

	submitForm = () => {
		this.props.listenSubmit(this.state)

		this.setState(this.stateInicial) 
	}

	render() {

		const { nome, livro, preco } = this.state

		// onChange={this.escutadorDeInput}
		return (
			<form>
				<label htmlFor="nome">Nome</label>
				<input
					type="text"
					name="nome"
					id="nome"
					value={nome}
					onChange={this.onChange}
				/>

				<label htmlFor="livro">Livro</label>
				<input
					type="text"
					name="livro"
					id="livro"
					value={livro}
					onChange={this.onChange}
				/>

				<label htmlFor="preco">Preço</label>
				<input
					type="text"
					name="preco"
					id="preco"
					value={preco}
					onChange={this.onChange}
				/>

				<button onClick={this.submitForm} type="button" >Salvar</button>
			</form>
		)
	}
}
