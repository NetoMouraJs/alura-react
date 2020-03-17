//	@Imports Core
import React,{Fragment} from 'react'

// @Imports Components
import {HeaderComponent} from '../core'

export default class SobreComponent extends React.Component{
	render(){
		return (
			<Fragment>
				<HeaderComponent />
				<h1>Sobre</h1>
			</Fragment>
		)
	}
}
