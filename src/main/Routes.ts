/* eslint-disable no-nested-ternary */
import Express, { Application, Request, Response, Router } from 'express';

import { LANG } from '@config/const';
import { catchAsyncErrorWrapper } from '@exceptions';
import { IObjectRoute } from '@interfaces';
import messages from '@locale/messages';
import Default from '@resources/default/DefaultController';

import { IAsyncRoute } from '../interfaces/IRoute';

/*
 * Definição de funções assincronas para validação
 */
// eslint-disable-next-line
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

class Routes {
	private router: Router;

	private app: Application;

	constructor(app: Application) {
		this.app = app;
		this.router = Express.Router();
		this.defaultRoutes();
	}

	public getRoutes(): Router {
		return this.router;
	}

	public defaultRoutes(): void {
		const defaultRoutes: IObjectRoute[] = new Default().getRoutes();
		for (const route of defaultRoutes) {
			this.registerPublicRoute('', route);
		}
	}

	private registerPublicRoute(prefix: string, route: IObjectRoute) {
		this.app.use(prefix, this.router);
		if (route.controllerRoute instanceof AsyncFunction === true) {
			this.router[route.method](
				route.url,
				catchAsyncErrorWrapper(route.controllerRoute as IAsyncRoute)
			);
		} else {
			this.router[route.method](route.url, route.controllerRoute);
		}
	}

	public async registerResourceRoutes(
		routers: IObjectRoute[]
	): Promise<void> {
		for (const router of routers) {
			const vs =
				router.version && router.version !== ''
					? `/${router.version}`
					: '';
			this.registerPublicRoute(`/api${vs}`, router);
		}
	}
	

	public error404(request: Request, response: Response): Response {
		return response.status(404).json({
			content: {
				message: messages.error404.message[LANG]
			},
			status_code: 404
		});
	}
}

export default Routes;
