//	@Imports Core
import React from 'react'

//	@Imports Contracts
import { ILivroService } from '../../../../../services/LivroService'
import IFormValidator from '../../../core/utils/FormValidator.interface'

//	@Contract StateInitial
interface IStateInicial {
	nome: string;
	autor: string;
	preco: string;
}

//	@Contract State
interface IState extends IStateInicial {}

//	@Contract Props
interface IProps {
	listenSubmit: Function;
	livroService: ILivroService;
	formValidator: IFormValidator;
}

//	@Class Main
export default class FormComponent extends React.Component<IProps, IState> {
	//	@Var - Global - inicializa o state dos inputs do Form
	public stateInicial: IStateInicial = { nome: '', autor: '', preco: '' };
	public _livroService: ILivroService;
	public _formValidator: IFormValidator;

	//	@Ctor
	constructor(props: IProps) {
		super(props)

		this._livroService = this.props.livroService
		this._formValidator = this.props.formValidator

		this.state = this.stateInicial // "Seta" o estado incial ao estado do componente
	}

	//	@Method usada Pelos Inputs do Form para modificação de estado
	onChange = (event: any) => {
		const { name, value } = event.target

		let newState = { [name]: value } as Pick<IState, keyof IState> // Dinamicamente modifica o estado armazenado pela entrada do input

		this.setState(newState) // Seta o novo state
	};

	//	@Method usada pelo Btn do form para envio do formulario
	submitForm = () => {
		//	Verifica se os inputs estão preenchidos

		if (
			this._formValidator.validator(
				[
					{
						campo: 'nome',
						metodo: 'isEmpty',
						validoQuando: false,
						messagem: 'Campo nome vazia!'
					}
				],
				this.state
			)
		) {
			this.props.listenSubmit(this.state) //	executa o evento de Submit do Parent
			this.setState(this.stateInicial) // Limpa as variaveis do state atual
		} else {
			console.log('Formulario Invalido')
		}
	};

	//	@Method (React)
	render() {
		const { nome, autor, preco } = this.state

		return (
			<form>
				<div className="row">
					<div className="input-field col s4">
						<label className="input-field" htmlFor="nome">
							Nome
						</label>
						<input
							type="text"
							className="validate"
							name="nome"
							id="nome"
							value={nome}
							onChange={this.onChange}
						/>
					</div>

					<div className="input-field col s4">
						<label className="input-field" htmlFor="autor">
							Autor
						</label>
						<input
							type="text"
							className="validate"
							name="autor"
							id="autor"
							value={autor}
							onChange={this.onChange}
						/>
					</div>

					<div className="input-field col s4">
						<label className="input-field" htmlFor="preco">
							Preço
						</label>
						<input
							type="text"
							className="validate"
							name="preco"
							id="preco"
							value={preco}
							onChange={this.onChange}
						/>
					</div>
				</div>
				<button
					className="waves-effect waves-light indigo lighten-2 btn"
					onClick={this.submitForm}
					type="button"
				>
					Salvar
				</button>
			</form>
		)
	}
}