import { Request } from 'express';

interface IRequestModel<T> extends Request {
	body: T;
}

export default IRequestModel;
