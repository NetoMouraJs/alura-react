//	@Imports Core
import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//	@Imports Dependencies
import { LivroRepository } from '../infra/LivroRepository'
import { ILivroService,LivroService } from '../services/LivroService'

//	@Imports Components
import LivroComponent from './livro/LivroComponent'
import SobreComponent from './sobre/SobreComponent'
import AutorComponent from './autor/AutorComponent'

//	@Imports Components Utils
import {NotFoundComponent} from './core'

//	@Composer Home
const LivroComposer = (): ILivroService => {
	return new LivroService(new LivroRepository())
}

//	@Import Main
export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<LivroComponent livroService={LivroComposer()} />
						)}
					/>
					<Route
						exact
						path="/sobre"
						render={() => (
							<SobreComponent />
						)}
					/>
					<Route
						exact
						path="/autores"
						render={() => (
							<AutorComponent livroService={LivroComposer()}/>
						)}
					/>
					<Route
						render={() => (
							<NotFoundComponent />
						)}
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}
