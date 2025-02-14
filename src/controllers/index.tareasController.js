import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const __dirname = join(process.cwd(), '/src/database');

export const getAllTareas = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        res.status(200).json({data: database.tareas})
    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const getTarea = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        const { id } = req.params;

        const tarea = database.tareas.find( element => element.id === parseInt(id))

        if(!tarea) return res.status(404).json({"msg": `El usuario con el id ${id} no existe`})

        res.status(200).json({data: tarea});

    } catch(error){
        res.status(500).json({"msg": error.message})
    }
}

export const crearTarea = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        //console.log(req)
        const { titulo, descripción, estado } = req.body;

        if( !titulo || !descripción || !estado ) return res.status(400).json({"msg": "Campos requeridos"})

        database.tareas.push({ id: new Date().getTime(), titulo, descripción, estado });

        writeFileSync(join(__dirname, "data.json"), JSON.stringify(database), "utf-8")

        res.status(200).json({"data": `La tarea se a creado correctamente: ${titulo}`})

    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const actualizarTarea = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        const { titulo, descripción, estado } = req.body;
        const { id } = req.params;

        const usuario = database.usuarios.find( element => element.id === parseInt(id))
        if(!usuario) return res.status(404).json({"msg": `La tarea con el ${id} no existe`})

        const actualizaData = database.usuarios.map( element => element.id === parseInt(id) ? {...element, titulo, descripción, estado} : element);
        writeFileSync(join(__dirname, "/data.json"), JSON.stringify({usuarios: actualizaData}), "utf-8");
        res.status(200).json({data: {
            id: parseInt(),
            titulo,
        }})

    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const eliminarTarea = (req, res) => {
    try{

        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        const { id } = req.params;

        const buscarUsuario = database.usuarios.find(element => element.id === parseInt(id));
        if(!buscarUsuario) return res.status(404).json({"msg": `El usuario con el id ${id} no existe`})

        const filterData = database.usuarios.filter(element => element.id !== parseInt(id));
        writeFileSync(join(__dirname, "/data.json"), JSON.stringify({usuarios: filterData}), "utf-8");

        res.status(200).json({"msg": `El usuario con el id a sido eliminado correctamente`});

    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}