class EstudiantesController {

    constructor(){
        this.estudianteArray = [];
    }

    consultar(req, res) {
        res.json({msg: `Consulta estudiantes desde clase: ${this.estudianteArray.length}`});
        
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        res.json({msg: `Consulta detalle estudiante desde clase, con el id ${ id }`});
    }

    ingresar(req, res) {
        const { id } = req.params;
        this.estudianteArray.push({ id: id })
        res.json({msg: `Se agrego el estudiante con el id: ${id}`});
    }

    actualizar(req, res){
        res.json({msg: 'Actualiza estudiante desde clase'});
    }

    borrar(req, res){
        res.json({msg: 'Borra estudiante desde clase'});
    }

}

module.exports = new EstudiantesController();