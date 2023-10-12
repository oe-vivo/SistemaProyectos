const models = require('./models');

async function demoAsociacionMuchosAMuchos() {
    let donador = await models.Donador.findOne({
        where: {
            rfc: 100001 // Cambia a la matrícula del donador que deseas buscar
        }
    });

    let proyectos = await models.Proyecto.findAll();
    console.log("Datos del donador: ", donador.nombre);

    // Asociar todos los proyectos al donador
    await donador.addProyectos(proyectos, { through: { rfc: "Proyecto Pyme reposteria" } });

    // Desplegar los datos de los proyectos asociados al donador
    let proyectosAsociados = await donador.getProyectos();
    console.log("Proyectos del donador con rfc:", donador.rfc);
    proyectosAsociados.forEach(proyecto => {
        console.log(proyecto.nombre, proyecto.descripcion);
    });

    // Al hacer la asociación de donador con proyecto, se puede acceder
    // a los datos del donador a través del proyecto
    let proyectoNimbus = await models.Proyecto.findOne({ where: { nombre: "Nimbus" } });
    let donadoresNimbus = await proyectoNimbus.getDonadores();
    console.log("Donadores de Nimbus:");
    donadoresNimbus.forEach(e => {
        console.log(e.nombre, e.rfc);
    });

    models.sequelize.close();
}

demoAsociacionMuchosAMuchos();
