const { Router } = require('express');
const {Admin, User} = require("../db")
const { Op } = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Users = require('./users')
const Posts = require('./posts')
const Categories = require('./categories')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/users', Users)
router.use('/posts', Posts)
router.use('/categories', Categories)

router.post("/admin", async(req, res) => {
    let {usuario, email, contraseña} = req.body;
  try{
    let nuevoAdmin = await Admin.create({usuario, email, contraseña})
    res.status(200).send("se creo el admin", nuevoAdmin)
   } catch (err) {
     console.log(err);
     res.status(404).send("admin no creado")
    }
  });

  
  //!====================================================================================
//!RUTA BORRADO LOGICO
router.get("/banerUser", async (_req, res) =>{
try{
  const usersInactive = await getUsersInactive()
  console.log(usersInactive)
  res.status(200).json(usersInactive);
}catch(error){
  res.status(400).json({ message: error.message });
}
})







module.exports = router;