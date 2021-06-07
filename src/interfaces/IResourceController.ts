import { NextFunction, Request, Response } from 'express';

import IObjectRoute from './IObjectRoute';

interface IResourceController {
	route: string;
	getList: (
		request: Request,
		response: Response,
		next?: NextFunction
	) => Promise<Response>;
	getById: (
		request: Request,
		response: Response,
		next?: NextFunction
	) => Promise<Response>;
	create: (
		request: Request,
		response: Response,
		next?: NextFunction
	) => Promise<Response>;
	destroy: (
		request: Request,
		response: Response,
		next?: NextFunction
	) => Promise<Response>;
	getRoutes: () => IObjectRoute[];
}

export default IResourceController;
