import { LANG } from '@config/const';
import { NotFoundException } from '@exceptions';
import { IService } from '@interfaces';
import messages from '@root/src/locale/messages';
import Project from '@entity/Project'

import { ProjectModel } from '../ProjectModel';
import { IProject } from '../interfaces/IProject';

class DeleteProjectService implements IService {
	run = async (projectId: string): Promise<IProject> => {
    const project: ProjectModel = await Project.findOne({
      where: { uuid: projectId },
    });
    if (project) {
      Project.delete(project);
      return project;
    } else throw new NotFoundException(messages.project.detailNotFound[LANG]);
	};
}

export default DeleteProjectService;
