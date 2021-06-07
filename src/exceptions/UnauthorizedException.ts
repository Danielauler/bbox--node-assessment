import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class UnauthorizedException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Unauthorized';
		super(msg, HttpStatusCode.UNAUTHORIZED, code);
	}
}
