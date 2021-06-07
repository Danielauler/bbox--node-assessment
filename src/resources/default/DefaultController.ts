import { Request, Response } from 'express';

import HandleResponse from '@helpers/HandleResponse';
import { IController, IObjectRoute } from '@interfaces';
import pkg from '@root/package.json';

class InfoController implements IController {
	private health = (request: Request, response: Response): Response => {
		return HandleResponse.success(response, {
			content: {
				message: 'ok'
			}
		});
	};

	private healthCheck = (request: Request, response: Response): Response => {
		return HandleResponse.success(response, {
			content: {
				message: 'ok'
			}
		});
	};

	private ready = async (
		request: Request,
		response: Response
	): Promise<Response> => {
		return HandleResponse.success(response, {
			content: {
				message: 'ok'
			}
		});
	};

	private info = async (
		request: Request,
		response: Response
	): Promise<Response> => {
		return HandleResponse.success(response, {
			content: {
				name: pkg.name,
				description: pkg.description,
				version: pkg.version
			}
		});
	};

	public getRoutes(): IObjectRoute[] {
		return [
			{
				url: `/health/`,
				version: '',
				method: 'get',
				resource: 'info',
				action: 'health',
				controllerRoute: this.health
			},
			{
				url: `/health-check/`,
				version: '',
				method: 'get',
				resource: 'info',
				action: 'health-check',
				controllerRoute: this.healthCheck
			},
			{
				url: `/ready/`,
				version: '',
				method: 'get',
				resource: 'info',
				action: 'ready',
				controllerRoute: this.ready
			},
			{
				url: `/info/`,
				version: '',
				method: 'get',
				resource: 'info',
				action: 'info',
				controllerRoute: this.info
			}
		];
	}
}

export default InfoController;
