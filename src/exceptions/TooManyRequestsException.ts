import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class TooManyRequestsException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Too Many Requests';
		super(msg, HttpStatusCode.TOO_MANY_REQUESTS, code);
	}
}
