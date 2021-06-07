import type { Request, Response } from 'express';

import { HttpStatusCode } from '@config/const';
import HandleResponse from '@helpers/HandleResponse';
import { IResourceController, IObjectRoute, IRequestModel } from '@interfaces';

import { IProject, ProjectRequestBody } from './interfaces/IProject';
import { IUserId } from '@resources/user/interfaces/IUser';

import {
	CreateProjectService,
	DetailProjectService,
	ListProjectService,
	DeleteProjectService,
} from './services';

class ProjectController implements IResourceController {
	public route = 'projects';

	public async getList(
		request: IRequestModel<IUserId>,
		response: Response
	): Promise<Response<Array<IProject>>> {
		const { userId } = request.query as any;
		const { items } = await new ListProjectService().run(userId);


		return HandleResponse.success(response, items, HttpStatusCode.OK);
	}

	public async getById(
		request: Request,
		response: Response
	): Promise<Response<IProject>> {
		const { projectId } = request.params;
		const project = await new DetailProjectService().run(projectId);
		return HandleResponse.success(response, project, HttpStatusCode.OK);
	}

	public async create(
		request: IRequestModel<ProjectRequestBody>,
		response: Response
	): Promise<Response<IProject>> {
		const { userId, description } = request.body;

		const project = await new CreateProjectService().run({ userId, description });

		return HandleResponse.success(
			response,
			project,
			HttpStatusCode.CREATED
		);
	}

	public async destroy(
		request: Request,
		response: Response
	): Promise<Response<IProject>> {
		const { projectId } = request.params;
		const project = await new DeleteProjectService().run(projectId);

		return HandleResponse.success(response, project, HttpStatusCode.OK);
	}

	public getRoutes(): IObjectRoute[] {
		return [
			{
				url: `/${this.route}`,
				version: 'v1',
				method: 'get',
				resource: this.route,
				action: 'list',
				controllerRoute: this.getList
			},
			{
				url: `/${this.route}`,
				version: 'v1',
				method: 'post',
				resource: this.route,
				action: 'create',
				controllerRoute: this.create
			},
			{
				url: `/${this.route}/:projectId`,
				version: 'v1',
				method: 'get',
				resource: this.route,
				action: 'detail',
				controllerRoute: this.getById
			},
			{
				url: `/${this.route}/:projectId`,
				version: 'v1',
				method: 'delete',
				resource: this.route,
				action: 'delete',
				controllerRoute: this.destroy
			}
		];
	}
}

export default ProjectController;
