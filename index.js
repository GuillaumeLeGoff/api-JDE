import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";

const fileupload = require("express-fileupload");
const fs = require("fs");
import cors from "cors";

import routes from "./routes/appRoutes";

const app = express();
const PORT = 4000;

// disabling mention
app.disable("x-powered-by");

// mongo connexion
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://127.0.0.1/Fake_app`);

// file upload setup
app.use(fileupload());
app.use(express.static("medias"));

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

//POST
app.post("/upload", (req, res) => {
  const user = req.body.user;
  const newpath = __dirname + "";
  const file = req.files.file;
  const hashedName = req.body.fileName;
  const format = req.body.format;
  file.mv(`${newpath}${hashedName}.${format}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "File upload failed", code: 500 });
    } else {
      res.status(200).send({ message: "File Uploaded", code: 200 });
    }
  });
});

//DELETE
app.post("/delete", (req, res) => {
  const fileName = req.body.fileName;
  const format = req.body.format;
  const directoryPath = __dirname + ""
  if (req.body.fileName  != "file"){
    
    fs.unlink(directoryPath + fileName +"."+ format, (err) => {
    });
    
  }
  
});

//routes
routes(app);

app.get("/", (req, res) =>
  res.send(`Le serveur JDE fonctionne sur le port : ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Le serveur JDE fonctionne sur le port : ${PORT}`)
);

// Fonction pour ajouter des roles dans la base de donnée

// initial();

// import Role from './models/login/roleModel'
//
// function initial() {
//     new Role({
//         name: "user"
//     }).save(err => {
//         if (err) {
//             console.log("error", err);
//         }
//         console.log("added user to role collection");
//     })
//     new Role({
//         name: "admin"
//     }).save(err => {
//         if (err) {
//             console.log("error", err);
//         }
//         console.log("added user to role collection");
//     })
// }
