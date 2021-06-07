import { IMessage } from '@interfaces';

const messages: IMessage = {
	error404: {
		message: {
			ptBr: 'A rota não foi encontrada'
		}
	},
	error500: {
		message: {
			ptBr: 'Aconteceu um erro interno no servidor'
		}
	},
	running: {
		message: {
			ptBr: '⚡️[server]: Server rodando na porta '
		}
	},
	user: {
		errorFind: {
			ptBr: 'Para obter um usuário especifico, deve ser informado o id na url!'
		},
		notFound: {
			ptBr: 'Usuário não encontrado'
		}
	},
	project: {
		notFound: {
			ptBr: 'Nenhum projeto encontrado'
		},
		userNotFound: {
			ptBr: 'Não foi encontrado nenhum usuário com este id'
		},
		emptyId: {
			ptBr: 'Não foi informado o id do usuário'
		},
		errorCreated: {
			ptBr: 'Não foi possivel criar o projeto'
		},
		detailNotFound: {
			ptBr: 'O item não foi encontrado'
		}
	}
};

export default messages;
