import type { Request, Response, NextFunction } from 'express';

import { IAsyncRoute, IRoute } from '../interfaces/IRoute';

function catchAsyncErrorWrapper(callback: IAsyncRoute): IRoute {
	return function action(req: Request, res: Response, next: NextFunction) {
		callback(req, res, next).catch(next);
	};
}

export { catchAsyncErrorWrapper };
