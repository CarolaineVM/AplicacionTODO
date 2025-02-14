import { Router } from "express";
const router = Router();

//import EstudiantesController from "../../controllers/estudiantesController.js";
import { getAllUsuarios, crearUsuario, getUsuario, actualizarUsuario, eliminarUsuario } from "../controllers/index.usuariosController.js"
import { getAllTareas } from "../controllers/index.tareasController.js";

router.get('/', (req, res) => {  res.render('index', {title: "Aplicación TODOList"}); })

router.get('/tasks', getAllTareas)
router.post('/tasks', crearUsuario)
router.get('/usuarios/:id', getUsuario)
router.post('/usuarios', crearUsuario)
/*router.put('/usuarios/:id', actualizarUsuario)
router.delete('/usuarios/:id', eliminarUsuario)*/


export default router