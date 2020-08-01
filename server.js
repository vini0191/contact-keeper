import express from 'express';
import connectDB from './config/db';

import usersRouter from './routes/users';
import authRouter from './routes/auth';
import contactsRouter from './routes/contacts';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.json({ msg: 'Welcome to ContactKeeper API' }));

// Define routes
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
