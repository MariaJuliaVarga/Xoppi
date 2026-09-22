import express from 'express';
import router from './routes/routes.js';
import Database from './config/db.js';
import cors from 'cors';
import ejs from 'ejs';

await Database.connect();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('assets'));
app.use('/assets', express.static('assets'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(router);

export default app;