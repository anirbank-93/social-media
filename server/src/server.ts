import express from 'express';
import config from 'config';
import cors from 'cors';
import bodyParser from 'body-parser';

import log from './logger';
import dbConnect from './db/connect';

// Routes
import indexRoute from './routes';

const PORT = config.get('port') as number;
const HOST = config.get('host') as string;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);

app.listen(PORT, HOST, () => {
  log.info(`App is listening at http://${HOST}:${PORT}`);

  dbConnect();
});
