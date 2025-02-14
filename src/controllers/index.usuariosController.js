import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const __dirname = join(process.cwd(), '/src/database');

export const getAllUsuarios = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        res.status(200).json({data: database.usuarios})
    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const getUsuario = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        const { id } = req.params;

        const usuario = database.usuarios.find( element => element.id === parseInt(id))

        if(!usuario) return res.status(404).json({"msg": `El usuario con el id ${id} no existe`})

        res.status(200).json({data: usuario});

    } catch(error){
        res.status(500).json({"msg": error.message})
    }
}

export const crearUsuario = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        //console.log(req)
        const { nombre, ciudad, edad, genero } = req.body;

        if( !nombre || !ciudad || !edad || !genero ) return res.status(400).json({"msg": "Campos requeridos"})

        database.usuarios.push({ id: new Date().getTime(), nombre, ciudad, edad, genero });

        writeFileSync(join(__dirname, "data.json"), JSON.stringify(database), "utf-8")

        res.status(200).json({"data": `El usuario se a creado correctamente: ${nombre}`})

    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const actualizarUsuario = (req, res) => {
    try{
        const database = JSON.parse(readFileSync(join(__dirname, "/data.json"), "utf-8"));
        const { nombre, ciudad, edad, genero } = req.body;
        const { id } = req.params;

        const usuario = database.usuarios.find( element => element.id === parseInt(id))
        if(!usuario) return res.status(404).json({"msg": `El usuario con el id ${id} no existe`})

        const actualizaData = database.usuarios.map( element => element.id === parseInt(id) ? {...element, nombre, ciudad, edad, genero} : element);
        writeFileSync(join(__dirname, "/data.json"), JSON.stringify({usuarios: actualizaData}), "utf-8");
        res.status(200).json({data: {
            id: parseInt(),
            nombre,
        }})

    } catch(error) {
        res.status(500).json({"msg": error.message})
    }
}

export const eliminarUsuario = (req, res) => {
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