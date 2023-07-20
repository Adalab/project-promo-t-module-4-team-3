const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2/promise');
const dotenv= require('dotenv');
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json({limit: '100mb'}));
server.set("view engine", "ejs")

const serverPort = 4000;
server.listen(serverPort, () =>{
    console.log(`server listening at ${serverPort}`);
});
//  Conexion a la bade de datos

async function connectDb() {
    const connection = await mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER_DB,
        password: process.env.PASS_DB
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

server.post('/api/projects/add', async(req, res) => {
    console.log('Hola llamando a endpoint api/projects/add')
    const body = req.body;
    let insertAuthor = "INSERT INTO author (autor, job, photo) VALUE (?, ?, ?)";
    const connect = await connectDb();
    const [resultAuthor] = await connect.query(insertAuthor, [
        body.autor, body.job, body.photo
    ]);
    console.log(resultAuthor);

    const idAuthor = resultAuthor.insertId;
    let insertProject = "INSERT INTO projects (name, slogan, technologies, demo, repo, description, image, fk_idauthor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [resultProject] = await connect.query(insertProject, [
      body.name,
      body.slogan,
      body.technologies,
      body.demo,
      body.repo,
      body.desc,
      body.image,
      idAuthor,
    ]);
    console.log('resultproyect',resultProject)

    res.json({cardURL: `http://localhost:4000/project/${resultProject.insertId}`})
});

server.get("/project/:idProject", async (req, res) => {
    const id = req.params.idProject;
    const query = "SELECT * FROM author INNER JOIN projects ON author.idauthor = projects.fk_idauthor WHERE idprojects = ? ";
    const connect = await connectDb();
    const [results] = await connect.query(query, id);
    console.log(results);
    res.render("detailProject", results[0]);
})


server.get('/api/filter', async(req,res)=>{
    
});




server.use(express.static("./src/public"));
const pathServerPublicStyles = './src/public_css';
server.use(express.static(pathServerPublicStyles));






