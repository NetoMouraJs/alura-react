import React, { Component } from 'react'
import { Livro } from '../../../entities/Livro'

interface IProps {
	dados: Livro[];
	colunas: string[];
	titulo: string;
}

export default class DataTableComponent extends Component<IProps, {}> {
	/**
	 *
	 */
	constructor(props) {
		super(props)
	}
	render() {
		// let linhas = this.props.dados.map(livro => <td>ola</td> )
		console.log(this.props.dados)
		let linhas = this.props.dados.map((item: Livro, index) => (
			<tr key={index}>
				{this.props.colunas.map((coluna: any) => (
					<td key={`${index}${item[coluna]}`}> {item[coluna]} </td>
				))}
			</tr>
		))
		console.log(linhas)
		return (
			<table className="centered highlight">
				<thead>
					<tr>
						<th>{this.props.titulo}</th>
					</tr>
				</thead>
				{/* <tbody>{linhas}</tbody> */}
				<tbody>
					{linhas}
				</tbody>
			</table>
		)
	}
}
