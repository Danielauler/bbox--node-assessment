import { NextFunction, Request, Response } from 'express';

export type IRoute = (
	request: Request,
	response: Response,
	next: NextFunction
) => Response | void;

export type IAsyncRoute = (
	request: Request,
	response: Response,
	next: NextFunction
) => Promise<Response | void>;
