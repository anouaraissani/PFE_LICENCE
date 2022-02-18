const express = require('express');
const pool = require('./model');
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

//ROUTES

//SELECT
app.get('/Enseignants', async(req,res)=>{
    try{
        console.error(req.body); 
        const Affiche = await pool.query(
            'SELECT COUNT(code_ens), grade FROM "enseignant" GROUP BY grade;');
            const data = Affiche.rows;
            res.json(data);
            return Affiche.rows;
    }catch(err){
        console.error(err.message); 
    }
});


//INSERT
app.post('/Enseignants', async(req,res)=>{
    try{
        console.error(req.body); 
        const {nom_ens, prenom_ens, email, grade, nb_heures_ens} = req.body;
        const newEns = await pool.query(
       'Insert into "enseignant" ("nom_ens", "prenom_ens", "email", "grade", "nb_heures_ens") values($1, $2, $3, $4, $5)'
       , [nom_ens, prenom_ens, email, grade, nb_heures_ens]);
           res.json(newEns.rows);
    }catch(err){
        console.error(err.message); 
    }
});

// listen for requests
app.listen(5000); 