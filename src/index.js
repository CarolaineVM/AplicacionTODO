import e from "express";
import morgan from "morgan";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";

import indexRoutes from './routes/index.js';

const app = e();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(e.json());
app.use(indexRoutes);

app.use(e.static(join(__dirname, 'public')));

//app.use(e.static(join(__dirname, 'imgs')));

app.listen(3000);
console.log("El server esta escuchando en el puerto:", 3000);
