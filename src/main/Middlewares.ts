import type { NextFunction, Request, Response } from 'express';

import {
	HttpStatusCode,
	DEBUG
} from '@config/const';
import {
	CoreException,
} from '@exceptions';
import { IBodyError } from '@interfaces';

class Middlewares {
	public static handlerErrors = (
		error: Error,
		request: Request,
		response: Response
	): Response => {
		if (error instanceof CoreException) {
			return response.status(error.status).json({
				code: error.code,
				message: error.message
			});
		}
		return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
			message: 'Internal server error!'
		});
	};
}

export function handlerErrors(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction // eslint-disable-line
): Response {
	if (error instanceof CoreException) {
		const body: IBodyError = {
			message: error.message
		};

		if (DEBUG) {
			body.code = error.code;
			body.status = error.status;
			body.stack = error.stack;
		}
		return res.status(error.status).json(body);
	}

	return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
		message: 'Internal server error!'
	});
}

export default Middlewares;
