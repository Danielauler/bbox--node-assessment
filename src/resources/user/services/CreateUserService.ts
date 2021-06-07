import { v4 as uuidv4 } from "uuid";
import { IService } from '@interfaces';
import { ValidationException } from '@exceptions';
import User, { UserRole, UserEvent } from '@entity/User'
import { IUser } from '../interfaces/IUser';
import { UserModel } from "../UserModel";

class CreateUserService implements IService {
	run = async (data: UserModel): Promise<IUser> => {
		const uuid = uuidv4();
		try {
			const user: User = User.create({
				uuid,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phoneNumber: data.phoneNumber,
				password: data.password,
				role: UserRole.CLIENT,
				creationDate: new Date(),
				currentEvent: UserEvent.CREATION,
			});
	
			await user.save();
	
			const result: IUser = {
				...user
			};
			delete result.password;
			return result;
		} catch (err) {
			throw new ValidationException(err.message);
		}
	};
}

export default CreateUserService;
