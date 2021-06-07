import { IListServiceReturn, IService } from '@interfaces';

import { IUser } from '../interfaces/IUser';
import User from '@entity/User'

class ListUserService implements IService {
	/**
	 * run: Método de implementação obrigatória, devido ao fato de implementar
	 * a interface IService, atualmente utilizado apenas para invocar o método
	 * de buscar uma lista de usuários
	 * @param data
	 * @return user @type IUser
	 */
	run = async (): Promise<IListServiceReturn<IUser>> => {
		const users = await User.find();
		return {
			items: users
		};
	};
}

export default ListUserService;
