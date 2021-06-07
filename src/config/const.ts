import dotenv from 'dotenv';

import { ILanguages } from '@interfaces';

dotenv.config();

const lang = process.env.API_LANG;

export const DEBUG: boolean = process.env.DEBUG === 'true';

export const ENVIRONMENT: string = process.env.ENVIRONMENT || 'develop';

export const LANG: ILanguages =
	lang === 'ptBr' || lang === 'en' ? lang : 'ptBr';
export const PORT: number = parseInt(process.env.PORT || '5001', 10);

export const MESSAGE_TYPE = {
	error: 'ERROR',
	warning: 'WARNING',
	info: 'INFO',
	success: 'SUCCESS'
};

export enum HttpStatusCode {
	PROCESSING = 102,
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NO_CONTENT = 204,
	PARTIAL_CONTENT = 206,
	MOVED_PERMANENTLY = 301,
	NOT_MODIFIED = 304,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	PAYMENT_REQUIRED = 402,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,
	NOT_ACCEPTABLE = 406,
	REQUEST_TIMEOUT = 408,
	UNPROCESSABLE_ENTITY = 422,
	LOCKED = 423,
	UPGRADE_REQUIRED = 426,
	TOO_MANY_REQUESTS = 429,
	UNAVAILABLE_FOR_LEGAL_REASONS = 451,
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
	INSUFFICIENT_STORAGE = 507,
}
