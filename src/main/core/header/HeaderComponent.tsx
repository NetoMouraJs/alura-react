//	@Imports Core
import React from 'react'

import LinkWrapper from '../utils/LinkWrapper'

//	@Class Main
export default class HeaderComponent extends React.Component<{}, {}> {
	//	@Method (React)
	render() {
		return (
			<nav>
				<div className="nav-wrapper indigo lighten-2">
					<LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
						Casa do Codigo
					</LinkWrapper>
					<ul id="nav-mobile" className="right">
						<li>
							<LinkWrapper to="/autores">Autores</LinkWrapper>
						</li>
						<li>
							<LinkWrapper to="/sobre">Sobre</LinkWrapper>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
