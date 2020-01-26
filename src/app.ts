import express, {NextFunction, Request, Response} from "express";
import path from 'path';
import routes from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb'}));
app.use(express.json({ limit: '10mb'}));
app.use('/static/', express.static(path.join(__dirname, 'static')));

app.use('/', routes);

export default app;
