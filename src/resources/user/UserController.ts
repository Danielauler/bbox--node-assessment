import type { Response } from 'express';
import { BadRequestException } from '@exceptions';

import { HttpStatusCode } from '@config/const';
import HandleResponse from '@helpers/HandleResponse';
import {
	IController,
	IObjectRoute,
	IRequestModel
} from '@interfaces';

import { IUser, IUserId } from './interfaces/IUser';
import {
	DetailUserService,
	ListUserService,
	CreateUserService,
	RemoveUserService
} from './services';

class UserController implements IController {
	public route = 'users';

	public async getList(
		request: IRequestModel<IUser>,
		response: Response
	): Promise<Response<Array<IUser>>> {
		const data = await new ListUserService().run();

		return HandleResponse.success(response, data.items, HttpStatusCode.OK);
	}

	public getById = async (
		request: IRequestModel<IUserId>,
		response: Response
	): Promise<Response> => {
		const { id } = request.params;

		const data = await new DetailUserService().run(id);
		return HandleResponse.success(response, data, HttpStatusCode.OK);
	};

	public create = async (
		request: IRequestModel<IUser>,
		response: Response
	): Promise<Response> => {
		const body = request.body;
		if (!Object.keys(body).length) {
			throw new BadRequestException();
		}
		
		const data = await new CreateUserService().run(body);

		return HandleResponse.success(response, data, HttpStatusCode.OK);
	};

	public destroy = async (
		request: IRequestModel<IUserId>,
		response: Response
	): Promise<Response> => {
		const { id } = request.params;

		const data = await new RemoveUserService().run(id);

		return HandleResponse.success(response, data, HttpStatusCode.OK);
	};


	/**
	 * getRoutes: Método de implementação obrigatória devido ao fato de implementar
	 * a interface IController, é utilizado para o registro de rotas e retorna um
	 * array de objetos com suas propriedades.
	 * OBS: a resource e a action são utilizadas para questões de autorizações
	 */
	public getRoutes(): IObjectRoute[] {
		return [
			{
				url: `/${this.route}`,
				version: 'v1',
				method: 'get',
				resource: 'user',
				action: 'list',
				controllerRoute: this.getList
			},
			{
				url: `/${this.route}`,
				version: 'v1',
				method: 'post',
				resource: 'users',
				action: 'main_address',
				controllerRoute: this.create
			},
			{
				url: `/${this.route}/:id`,
				version: 'v1',
				method: 'delete',
				resource: 'users',
				action: 'remove_address',
				controllerRoute: this.destroy
			},
			{
				url: `/${this.route}/:id`,
				version: 'v1',
				method: 'get',
				resource: 'user',
				action: 'detail',
				controllerRoute: this.getById
			}
		];
	}
}

export default UserController;
