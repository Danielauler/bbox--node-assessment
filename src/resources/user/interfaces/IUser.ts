export interface IUser {
	uuid: string;
	firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  created_at?: string;
}

export interface IUserId {
	uuid: string;
}
