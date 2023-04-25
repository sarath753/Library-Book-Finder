const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/bookroutes");
const app = express();
const cors = require('cors');
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)




mongoose
  .connect(
    "mongodb+srv://sarathsai75309:AHs4fXsUFEJniQ9F@cluster1.tovdhx0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(()=>console.log("connected to Database"))
  .then(()=>{
    app.listen(5000);
   })
   .catch((err) => console.log(err));


