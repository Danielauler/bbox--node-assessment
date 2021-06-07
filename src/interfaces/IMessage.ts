interface KeyValue {
	ptBr: string;
	en?: string;
}

interface IMessage {
	error404: Record<string, KeyValue>;
	error500: Record<string, KeyValue>;
	running: Record<string, KeyValue>;
	user: Record<string, KeyValue>;
	project: Record<string, KeyValue>;
}

export type ILanguages = 'ptBr' | 'en';

export default IMessage;
