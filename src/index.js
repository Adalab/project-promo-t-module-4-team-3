const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2/promise');

const server = express();

server.use(cors());
server.use(express.json({limit: '100mb'}));

const serverPort = 4000;
server.listen(serverPort, () =>{
    console.log(`server listening at http://localhost:${serverPort}`);
});
//  Conexion a la bade de datos

async function connectDb() {
    const connection = await mysql.createConnection({
        host: "sql.freedb.tech",
        database: "freedb_Project_Adalab_Cards",
        user: "freedb_rootAdalab",
        password: "S5Wh3QNSzet9Yn%"
    })
    await connection.connect();
    console.log(`holis,nos conectamos a: ${connection.threadId}`);
    return connection;
}
connectDb();

//  Endpoints
server.get("/api/allprojects", async (req, res) => {
    const selectAllProjects = "SELECT * FROM projects INNER JOIN author ON projects.fk_idauthor= author.idauthor";
    const connect = await connectDb();
    const [result] = await connect.query(selectAllProjects);
    res.json(result);
})
