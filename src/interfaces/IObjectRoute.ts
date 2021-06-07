import { IRoute, IAsyncRoute } from './IRoute';

interface IObjectRoute {
	url: string;
	version: string;
	method: 'get' | 'post' | 'patch' | 'put' | 'delete';
	controllerRoute: IRoute | IAsyncRoute;
	action: string;
	resource: string;
}

export default IObjectRoute;
