const cors = require("cors");
const express = require ("express");
const fs=require("fs");
const https= require("https");
const proyectosRouter = require("./routes/proyectos");
const donadoresRouter = require("./routes/donadores");
process.env.port = 4001;
const app=express();
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "ovr1520!" //passwd de la llave privada usado en la creación del certificado
};
const httpsServer = https.createServer(credenciales, app);
app.use(cors());
app.use(express.json());

app.use("/proyectos",proyectosRouter);
app.use("/donadores",donadoresRouter);

httpsServer.listen(process.env.port, () => {
    console.log('Servidor https escuchando por el puerto:', process.env.port);
}).on('error', err => {
    console.log('Error al inciar el servidor:', err);
});