import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class BadRequestException extends CoreException {
	constructor(message?: string) {
		const msg = message || 'Bad Request';
		super(msg, HttpStatusCode.BAD_REQUEST);
	}
}
