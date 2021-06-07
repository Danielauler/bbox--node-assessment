import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class NotFoundException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Not Found';
		super(msg, HttpStatusCode.NOT_FOUND, code);
	}
}
