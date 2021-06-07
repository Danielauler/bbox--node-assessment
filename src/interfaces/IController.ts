import IObjectRoute from './IObjectRoute';

interface IController {
	getRoutes: () => IObjectRoute[];
}

export default IController;
