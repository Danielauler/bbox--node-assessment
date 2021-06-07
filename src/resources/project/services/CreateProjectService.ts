import { v4 as uuidv4 } from "uuid";
import { LANG } from '@config/const';
import {
	ValidationException,
	BadRequestException,
	NotFoundException
} from '@exceptions';
import { IService } from '@interfaces';
import messages from '@locale/messages';
import Project from '@entity/Project'
import User from '@entity/User'

import { IProject, ProjectRequestBody } from '../interfaces/IProject';
import { ProjectModel } from '../ProjectModel';
import { IUser, IUserId } from '../../user/interfaces/IUser';
import { UserModel } from "../../user/UserModel";

class CreateProductService implements IService {
	getOwner = async (owner_id?: string): Promise<IUserId> => {
		if (!owner_id || owner_id?.trim() === '')
			throw new BadRequestException(messages.project.emptyId[LANG]);

		let owner;
		try {
			owner = await User.findOne({ uuid: owner_id });
		} catch (error) {
			if (error.name === 'CastError') {
				throw new NotFoundException(
					messages.project.userNotFound[LANG]
				);
			}
		}

		if (!owner)
			throw new NotFoundException(
				messages.project.userNotFound[LANG]
			);

		return {
			uuid: owner.uuid
		};
	};


	run = async (data: ProjectRequestBody): Promise<IProject> => {
		const uuid = uuidv4();
    const user: IUserId = await this.getOwner(data.userId as string)
    const project: Project = Project.create({
      uuid,
      description: data.description,
      owner: user,
      creationDate: new Date(),
    });

		try {
			const newProduct =  await project.save();;
			return newProduct;
		} catch (error) {
			throw new BadRequestException(messages.project.errorCreated[LANG]);
		}
	};
}

export default CreateProductService;
