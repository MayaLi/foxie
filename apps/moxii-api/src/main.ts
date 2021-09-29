/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {getAdvocateById} from "./app/controllers/advocates";

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to moxii-api!' });
});

app.get('/advocates/:advocateId', (req, res) => {
  const advocateId = req.params.advocateId;
  res.send(getAdvocateById(advocateId))
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
