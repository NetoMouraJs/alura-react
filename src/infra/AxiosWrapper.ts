//	@Imports Utils
import axios, { AxiosResponse } from 'axios'

export default class AxiosWrapper {
	async get(url: string): Promise<AxiosResponse> {

		const result = await axios.get(url).catch(error=> { throw new Error(error) })	
		console.log(result)
		return result
	}
	async post(url, item): Promise<AxiosResponse>{
		const result = await axios.post(url, item).catch(error=> { throw new Error(error) })		
		return result
	}
	async delete(url): Promise<AxiosResponse>{
		const result = await axios.delete(url).catch(error=> { throw new Error(error) })	
		return result
	}
}
