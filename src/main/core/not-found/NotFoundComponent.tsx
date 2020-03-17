//	@Imports Core
import React,{Fragment} from 'react'

// @Imports Components
import {HeaderComponent} from '../index'

export default class SobreComponent extends React.Component{
	render(){
		return (
			<Fragment>
				<HeaderComponent />
				<h1>Página não encontrada: 404</h1>
			</Fragment>
		)
	}
}
