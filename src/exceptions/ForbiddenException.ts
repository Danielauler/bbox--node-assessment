import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class ForbiddenException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Forbidden';
		super(msg, HttpStatusCode.FORBIDDEN, code);
	}
}
