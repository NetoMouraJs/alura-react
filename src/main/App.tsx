//	@Imports Core
import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

//	@Imports Components
import HomeComponent from './components/home/HomeComponent'

//	@Imports Dependencies
import { LivroRepository } from '../infra/LivroRepository'
import { LivroService } from '../services/LivroService'

//	@Composer Home
const HomeComposer = () : LivroService=>{
	return new LivroService(new LivroRepository())
}

//	@Import Main
export default class App extends React.Component {
	render() {
		return <HomeComponent livroService={ HomeComposer() } />
	}
}
