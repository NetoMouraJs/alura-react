import React, { Component } from 'react'
import { Livro } from '../../../entities/Livro'

interface IProps {
	dados: Livro[];
	colunas: string[];
	titulo: string;
}

export default class DataTableComponent extends Component<IProps, {}> {
	render() {
		let linhas = this.props.dados.map((item: Livro, index) => (
			<tr key={index}>
				{this.props.colunas.map((coluna: any) => (
					<td key={`${index}${item[coluna]}`}> {item[coluna]} </td>
				))}
			</tr>
		))
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
