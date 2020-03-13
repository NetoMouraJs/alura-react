//	@Imports Core
import React from 'react'

//	@Class Main
export default class HeaderComponent extends React.Component<{}, {}> {
	//	@Method (React)
	render() {
		return (
			<nav>
				<div className="nav-wrapper indigo lighten-2">
					<a href="/" className="brand-logo">
						Casa do Codigo
					</a>
					<ul id="nav-mobile" className="right">
						<li>
							<a href="/autores">Autores</a>
						</li>
						<li>
							<a href="/livros">Livros</a>
						</li>
						<li>
							<a href="/sobre">Sobre</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
