import { LANG } from '@config/const';
import { NotFoundException } from '@exceptions';
import { IService } from '@interfaces';
import messages from '@root/src/locale/messages';
import Project from '@entity/Project'

import { IProject } from '../interfaces/IProject';
import { ProjectModel } from '../ProjectModel';

class DetailProjectService implements IService {
	run = async (projectId: string): Promise<IProject> => {
		const projects: ProjectModel | null = await Project.findOne({
			where: { uuid: projectId },
		});

		if (!projects)
			throw new NotFoundException(messages.project.detailNotFound[LANG]);

		return projects;
	};
}

export default DetailProjectService;
