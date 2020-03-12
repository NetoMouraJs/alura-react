//	@Imports Core
import React from 'react'

//	@Function Component React
const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>Autores</th>
				<th>Livros</th>
				<th>Preços</th>
				<th>Remover</th>
			</tr>
		</thead>
	)
}

//	@Function Component React
const TableBody = (props: any) => {
	const linhas = props.autores.map((linha: any, index: any) => {
		return (
			<tr key={index}>
				<td>{linha.nome}</td>
				<td>{linha.livro}</td>
				<td>{linha.preco}</td>
				<td>
					<button
						className="waves-effect waves-light indigo lighten-2 btn"
						onClick={() => {
							props.removeAutor(index)
						}}
					>
						Remover
					</button>
				</td>
			</tr>
		)
	})

	return <tbody>{linhas}</tbody>
}

//	@Contract Props
interface IProps {
	autores: Object[]; // Objeto Json[]
	removeAutor: Function; // Ação do parent para remoção do autor
}

//	@Class Main
export default class TableComponent extends React.Component<IProps> {
	render() {
		const { autores, removeAutor } = this.props

		return (
			<table className="centered highlight">
				<TableHead />
				<TableBody autores={autores} removeAutor={removeAutor} />
			</table>
		)
	}
}
