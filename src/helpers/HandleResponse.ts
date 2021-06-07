import { Response } from 'express';

class HandleResponse {
	public static success(
		response: Response,
		data: unknown,
		status = 200
	): Response {
		return response.status(status).json(data);
	}
}

export default HandleResponse;
