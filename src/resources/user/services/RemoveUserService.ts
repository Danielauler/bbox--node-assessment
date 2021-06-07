import { NotFoundException } from '@exceptions';
import { IService } from '@interfaces';
import User from '@entity/User'
import { UserModel } from '../UserModel';

class RemoveUserService implements IService {
	public async run(id: string): Promise<void> {
		const user: UserModel = await User.findOne({ uuid: id });

		if (!user) throw new NotFoundException('Usuário não encontrado');

		User.delete(user);
	}
}

export default RemoveUserService;
