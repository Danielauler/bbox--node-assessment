import { HttpStatusCode } from '@config/const';

import { CoreException } from './CoreException';

export class ValidationException extends CoreException {
	constructor(message?: string, code?: string) {
		const msg = message || 'Validation Error';
		super(msg, HttpStatusCode.NOT_ACCEPTABLE, code);
	}
}
