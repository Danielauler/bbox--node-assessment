import 'reflect-metadata';
import { PORT } from '@config/const';
import App from './main/App';

const app = new App();

app.setPort(PORT);
app.start();
