const express = require("express");

const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'profes',
    user: 'root',
    password: '',
    port: 3306,
})

app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro");
})

app.post("/validar", function(req,res){
    const datos = req.body;

    let ced = datos.ced;
    let pro = datos.pro;
    let fec = datos.fec;
    let mat = datos.mat;

  
    
    let registrar = "INSERT INTO profes (ID, NombreProfe, fecha, Materia) VALUES ('"+ced+"','"+pro+"','"+fec+"','"+mat+"')";


    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("datos almacenados correctamente");
                  
        }
    })
    
});

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});


