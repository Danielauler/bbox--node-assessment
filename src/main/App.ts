import Express, { Application } from 'express';
import helmet from 'helmet';
import { Server } from 'http';
import Morgan from 'morgan';

import { LANG } from '@config/const';
import messages from '@locale/messages';

import { walkControllers } from '@helpers/walk';
import createConnection from '../database/Database';
import { handlerErrors } from './Middlewares';
import Routes from './Routes';

class App {
	private port = 5555;

	private app: Application;

	private routes: Routes;

	private server!: Server;

	constructor() {
		this.app = Express();
		createConnection();
		this.applyMidlewares();
		this.routes = new Routes(this.app);
	}

	public getApp = (): Application => {
		return this.app;
	};

	public setPort = (port: number): void => {
		this.port = port;
	};

	private registerResources = async () => {
		const controllers: string[] = walkControllers();
		for (const item of controllers) {
			const controller = new (require(item).default)();
			const controllerRoutes = controller.getRoutes();
			this.routes.registerResourceRoutes(controllerRoutes);
		}
	};

	private running = (): void => {
		this.routes.getRoutes().stack.map((item) => {
			console.log(`-> /v1${item.route.path}`);
			return item.route.path;
		});
		console.log(`🌐 ${messages.running.message[LANG]} ${this.port} 🚀`);
	};

	public configure = (): void => {
		this.app.use('/', this.routes.getRoutes());
		this.registerResources();
		this.app.use(handlerErrors);
		this.listenSignals();
	};

	public start = (): void => {
		this.configure();
		this.server = this.app.listen(this.port, this.running);
	};

	public stop = (): void => {
		this.server.close();
	};

	private applyMidlewares = (): void => {
		this.app.use(helmet());
		this.app.use(Morgan('combined'));
		this.app.use(Express.json());
	};

	private listenSignals = (): void => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		process.on('unhandledRejection', (reason: any) => {
			console.log(`Unhandled Rejection at: ${reason.stack || reason}`);
		});
	};
}

export default App;

