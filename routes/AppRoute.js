//ตัวกลาง
import express from 'express';
import ProductRoute from './ProductRoute.js';

const AppRoute = express.Router();

AppRoute.get('/', (req, res) => {
    res.json({ 'message' : 'hello API' });
});

// another routes
// category routes CRUD
AppRoute.use('/category',CategoryRoute);
// product routes CRUD
// user routes // authentication signup(register)


AppRoute.get('*', (req, res) => {
    const error = new Error('Not Found');
    res.json({ 'message' : error.message });
});
export default AppRoute;