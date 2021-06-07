import { HttpStatusCode } from '@config/const';

interface IBodyError {
	message: string;
	code?: string;
	status?: HttpStatusCode;
	stack?: string;
}

export default IBodyError;
