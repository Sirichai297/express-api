import prisma from "../prisma/prisma.js";

//GET - POST
const CategoryCreate = async (req, res) =>{
    try {
        const { categoryName, description } = req.body;
        await prisma.category.create({
            data: {
                categoryName,
                description,
            }
        }).then( results => res.status(201).json(result))
          .catch( error => res.status(400).json({message: error.message}));
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
//GET
const CategoryGetAll = async (req,res) => {
    try {
        const categories = await prisma.category.findMany();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
//GET BY ID
const CategoryGetById = async (req,res) => {
    try {
        const {id} = req.params;
      //  const category = await prisma.category.findUnique({where: {categoryId: +id}});
      //  if (!category) return res.status(404).json({message: 'Category not found'});
     //   return res.status(200).json(category);
     await prisma.category.findUnique({where: {categoryId: +id}})
                            .then( result => {
                                if (!result) return res.status(404).json({message: 'Category not found'});
                                return res.status(200).json(result);
                            })
                            .catch( err => res.status(400).json({message: err.message}));
        if (!category) return res.status(404).json({message: 'Category not found'});
        return res.status(200).json(category);
           
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
// GET UPDATE
const CategoryUpdate = async (req,res) => {
    try {
        const {id} = req.params;
        const {categoryName, description } = req.body;
        await prisma.category.update({ 
              where: {categoryId: +id},
            data:{
                categoryName, 
                description}
            }).then(
                result => result.status(200).json(result)
            ).catch(error => {
                if (error.code === 'P2025') return res.status(404).json({message: 'Category not found'});
                res.status(400).json({message: error.message})
            });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
// Delete DELETE
const CategoryDelete = async (req,res) => {
    try {
        const {id} = req.params;
        await prisma.category.delete({where: {categoryId: +id}})
                    .then(() => res.status(200).json({message:'Category deleted successfully'}))
                    .catch(err => {
                        if (err.code === 'P2025') return res.status(200).json({message: 'Category not found'});
                        res.status(400).json({message: err.message})
                    });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export {CategoryCreate, CategoryGetAll, CategoryGetById, CategoryUpdate};
