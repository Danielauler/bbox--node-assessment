import { NotFoundException } from '@exceptions';
import { IService } from '@interfaces';
import { UserModel } from '../UserModel';

import { IUser } from '../interfaces/IUser';
import User from '@entity/User'

class DetailUserService implements IService {
	/**
	 * findById: Utilizado para buscar um usuário especifico,
	 * através da propriedade id na collection de users
	 * @param data IUser
	 * @return result IUser
	 */

	private findById = async (id: string): Promise<IUser> => {
		const user: UserModel | null = await User.findOne({ uuid: id });

		if (!user)
			throw new NotFoundException('Não existe usuário com esse id');

		const result: IUser = {
			...user
		};
		delete result.password;
		return result;
	}

	/**
	 * run: Método de implementação obrigatória, devido ao fato de implementar
	 * a interface IService, atualmente utilizado apenas para invocar o método
	 * de buscar um usuário pelo seu _id
	 * @param data
	 * @return user @type IUser
	 */
	public async run(id: string): Promise<IUser> {
		const user = await this.findById(id);
		return user;
	}
}

export default DetailUserService;
