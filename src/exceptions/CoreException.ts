import { HttpStatusCode } from '@config/const';

export abstract class CoreException extends Error {
	public readonly name: string;

	public readonly message: string;

	public readonly status: HttpStatusCode;

	public readonly code?: string;

	constructor(
		message: string,
		status = HttpStatusCode.INTERNAL_SERVER_ERROR,
		code?: string
	) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.status = status;
		this.code = code;
		this.stack = new Error(message).stack;
	}
}
