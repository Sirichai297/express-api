import express  from'express';

const ProductRoute = express.Router();
// ข้อมูลหลายตัว ข้อมู,เป็น อะเร ลิส
//CRUD
const products = [
    {id: 1, name :'iPhone15',price: 42000},
    {id: 2, name :'sumsung',price: 6000},
    {id: 3, name :'oppo',price: 5000},
    {id: 4, name :'vivo',price: 3000},
]; 
ProductRoute.get('/', (req, res) => {
    res.status(200).json(products);
})

ProductRoute.get('/:id', (req, res) => {
    //const id = req.params.id;
    const { id } = req.params.id;
    const product = products.find(p => p.id === +id);
    if (!product) return res.status(404).json({massage :'ไม่พบสินค้า'});
    res.status(200).json(product);
});


export default ProductRoute;