//	@Imports Core
import React from 'react'

//	@Import Domain
import { Livro } from '../../../../entities/Livro'



//	@Function Component React
const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>Nomes</th>
				<th>Autores</th>
				<th>Preços</th>
				<th>Remover</th>
			</tr>
		</thead>
	)
}

//	@Function Component React
const TableBody = (props: IProps) => {
	const linhas = props.livros.map((linha: Livro) => {
		return (
			<tr key={linha.id}>
				<td>{linha.nome}</td>
				<td>{linha.livro}</td>
				<td>{linha.preco}</td>
				<td>
					<button
						className="waves-effect waves-light indigo lighten-2 btn"
						onClick={() => {
							props.removeLivro(linha.id)
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
	livros: Livro[]; // Objeto Json[]
	removeLivro: Function; // Ação do parent para remoção do autor
}

//	@Class Main
export default class TableComponent extends React.Component<IProps> {
	render() {
		const { livros, removeLivro } = this.props

		return (
			<table className="centered highlight">
				<TableHead />
				<TableBody livros={livros} removeLivro={removeLivro} />
			</table>
		)
	}
}
