import { ILivroService, LivroService } from '../../services/LivroService'
import { LivroRepositoryAPI } from '../../infra/LivroRepository-api'


const makeLivroRepositoryAPI = () => {
	return new LivroRepositoryAPI()
}

const makeLivroService = () => {
	return new LivroService(makeLivroRepositoryAPI())
}

//	@Composer Home
export default class LivroComposer {
	static compose(): ILivroService {
		return makeLivroService()
	}
}
