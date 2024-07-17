import express from 'express';
import { CategoryCreate, CategoryGetAll, CategoryGetById ,CategoryDeleteById } from '../controllers/categoryContoller.js';
const CategoryRoute = express.Route();


CategoryRoute.post('/create' , CategoryCreate);
CategoryRoute.get('/gettal,CategoryGetAll');

CategoryRoute.get('/getbyid/:id' ,CategoryGetById);

CategoryRoute.put('/updatebyid/:id', CategoryDeleteById);

CategoryRoute.delete('/deletebyid/:id', CategoryDeleteById);

export default CategoreRoute;