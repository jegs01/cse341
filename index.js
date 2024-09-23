const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');
const swaggerRouter = require('./routes/swaggerRoutes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());

app.use(express.json());

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection error:', err));

app.use('/', swaggerRouter);
app.use('/', viewRouter);
app.use('/api', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
