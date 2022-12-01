import express from 'express';
var router = express.Router();
import bodyParser from 'body-parser';
import cors from 'cors';

import Routes from'./routes/route.js';
import subpoolRoutes from'./routes/subpoolroutes.js';
import questionRoutes from'./routes/questionroutes.js';
const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/', Routes);
app.use('//', questionRoutes);




import mongoose from 'mongoose';
 
const PORT = '8080';
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

mongoose.connect("mongodb+srv://aqsa-rafiq_05:DxpMLx0mNdQNvhQQ@cluster0.e1t06ut.mongodb.net/FYP?retryWrites=true&w=majority"
).then(()=>{
    console.log("DB connected");
  }).catch((err)=>{ console.log("DB error") });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

