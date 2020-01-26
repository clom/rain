import express, {NextFunction, Request, Response} from "express";
import path from 'path';
import routes from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

export default app;
