import React from 'react'

export default class Form extends React.Component {
	render() {
		return (
			<form action="">
				<label htmlFor="nome">Nome</label>
				<input type="text" name="nome" id="livro" />

				<label htmlFor="livro">Livro</label>
				<input type="text" name="livro" id="livro" />

				<label htmlFor="preco">Preço</label>
				<input type="text" name="preco" id="livro" />
			</form>
		)
	}
}
