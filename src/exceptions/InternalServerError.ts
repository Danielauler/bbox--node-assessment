import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class InternalServerErrorException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Internal Server Error';
		super(msg, HttpStatusCode.INTERNAL_SERVER_ERROR, code);
	}
}
