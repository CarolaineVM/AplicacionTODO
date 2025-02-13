class ProfesoresController {

    constructor(){

    }

    consultar(req, res) {
        res.json({msg: 'Consulta profesores desde clase'});
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        res.json({msg: `Consulta detalle profesores desde clase, con el id ${ id }`});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingreso profesor desde clase'});
    }

    actualizar(req, res){
        res.json({msg: 'Actualiza profesor desde clase'});
    }

    borrar(req, res){
        res.json({msg: 'Borra profesor desde clase'});
    }

}

module.exports = new ProfesoresController();