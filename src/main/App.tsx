//	@Imports Core
import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//	@Imports Components
import LivroComponent, { LivroComposer } from './livro/LivroComponent'
import SobreComponent from './sobre/SobreComponent'
import AutorComponent from './autor/AutorComponent'

//	@Imports Components Utils
import { NotFoundComponent } from './core'

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
							<LivroComponent livroService={LivroComposer.compose()} />
						)}
					/>
					<Route
						exact
						path="/sobre"
						render={() => <SobreComponent />}
					/>
					<Route
						exact
						path="/autores"
						render={() => (
							<AutorComponent livroService={LivroComposer.compose()} />
						)}
					/>
					<Route render={() => <NotFoundComponent />} />
				</Switch>
			</BrowserRouter>
		)
	}
}
