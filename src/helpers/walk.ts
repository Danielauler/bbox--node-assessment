/* eslint-disable security/detect-non-literal-fs-filename */
import fs from 'fs';
import path from 'path';

export const walkControllers = (
	dir = path.resolve(path.join(__dirname, '..', 'resources'))
): string[] => {
	const controllers: string[] = [];
	fs.readdirSync(dir).forEach((f) => {
		const dirPath = path.join(dir, f);
		if (f.includes('Controller.') && !f.includes('DefaultController')) {
			controllers.push(dirPath);
		}
		if (fs.statSync(dirPath).isDirectory()) {
			const otherControllers = walkControllers(dirPath);
			controllers.push(...otherControllers);
		}
	});

	return controllers;
};
