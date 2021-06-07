import { createConnection as connectToDB } from "typeorm";

const createConnection = async(): Promise<void> => {
	try {
		await connectToDB()
		console.log("☁ [database]: Database connection established")
	} catch (error) {
		console.error(`⚠ [database]: Couldn't connect to the database: ${error}`)
	}
};

export default createConnection;
