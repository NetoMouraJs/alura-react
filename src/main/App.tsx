//	@Imports Core
import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Switch } from 'react-router-dom'

//	@Imports Components
import LivroComponent from './livro/LivroComponent'

//	@Imports Dependencies
import { LivroRepository } from '../infra/LivroRepository'
import { LivroService } from '../services/LivroService'

//	@Composer Home
const HomeComposer = (): LivroService => {
	return new LivroService(new LivroRepository())
}

//	@Import Main
export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<LivroComponent livroService={HomeComposer()} />
				</Switch>
			</BrowserRouter>
		)
	}
}
