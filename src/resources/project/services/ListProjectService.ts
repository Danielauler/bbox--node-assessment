import { IListServiceReturn, IService } from '@interfaces';
import Project from '@entity/Project'
import { IProject } from '../interfaces/IProject';

class ListProjectService implements IService {
	run = async (userId?: string): Promise<IListServiceReturn<IProject>> => {
		let projects: Project[];
		if (userId) projects = await Project.find({where: { owner: userId }});
		else projects = await Project.find();
	
		return {
			items: projects
		};
	};
}

export default ListProjectService;
