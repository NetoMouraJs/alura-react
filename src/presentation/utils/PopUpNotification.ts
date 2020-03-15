import M from 'materialize-css'

export enum StatusMessage {
	success = 'success',
	error= 'error',
	warn= 'warn'
}

export default class PopUp{
	static exibeMensagem(status:StatusMessage, message) {
		switch(status){
		case StatusMessage.success:
			M.toast({html:message,classes:'green',displayLenght:2000})
			break
		case StatusMessage.error:
			M.toast({html:message,classes:'red',displayLenght:2000})
			break
		case StatusMessage.warn:
			M.toast({html:message,classes:'red',displayLenght:2000})
			break
		}
	}
}
