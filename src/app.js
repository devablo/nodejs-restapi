import express from 'express';
import routes from './routes/index';
import bodyParser from 'body-parser';

const app = express();

// Middelware
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(3000, () => {
    console.log('Running on port 3000...');
  });

export default app;