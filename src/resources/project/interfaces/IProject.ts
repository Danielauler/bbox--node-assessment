export interface IProject {
	uuid?: string;
	owner: object;
	description: string;
	creationDate?: Date;
}

export interface ProjectRequestBody {
  userId: string;
  description: string;
}

