import express, {Express, Request, Response} from "express"
import {DatabaseHandler} from './DatabaseHandler';



const app: Express = express();
app.use(express.static('../view'));
app.use(express.json())
const dataBaseHandler = DatabaseHandler.getInstance();

let animal1 = {
  name: "daisy",
  age: 6,
  location: "cairo",
  picture: "https://static.wixstatic.com/media/f0e8c1_42bf5292f9ff443a86a56a7d663fb778~mv2.jpeg/v1/fill/w_293,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ED742CF9-35D5-4774-A793-5D4DD127028A.jpeg"
}
let animal2 = {
  name: "liza",
  age: 1,
  location: "cairo",
  picture: "https://static.wixstatic.com/media/000ca0_9bdb443ce8b24e2c82f67fd884acbabc~mv2.jpeg/v1/fill/w_293,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9C11528E-C86F-4CA3-8398-71D4005BE105.jpeg"
}
let animal3 = {
  name: "montaser",
  age: 3,
  location: "cairo",
  picture: "https://static.wixstatic.com/media/c89dc2_5e26649865674b5e8b2fd22dd6879fb2~mv2.png/v1/fill/w_293,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_4995_HEIC.png"
}

// dataBaseHandler.createAnimal(animal1);
// dataBaseHandler.createAnimal(animal2);
// dataBaseHandler.createAnimal(animal3);



app.get('/',(req: Request, res: Response)=>{
  res.sendFile("index.html");
})

app.get('/animals', (req: Request, res: Response) =>{
  (async ()=>{
    let animals =await dataBaseHandler.getAllanimals();
    res.send(animals).status(200);
  })();
});

app.post('/signUp', (req: Request, res: Response)=>{
  dataBaseHandler.createUser(req.body);
});

app.post('/signIn', (req: Request, res: Response) =>{
  // console.log(req.body.email)
  let condition = {
    email: req.body.email,
    password: req.body.password
  };
  
  (async ()=>{
    const users = await dataBaseHandler.getUsers(condition);
    if (users.length == 0){
      res.status(404).send("not found")
    }else{
      console.log("here")
      res.status(200).redirect("adoptPage/adopt.html");
    }
    
  })();
});

app.post('/adopt', (req: Request, res: Response)=>{
  dataBaseHandler.createForm(req.body);
});


app.listen(3000, ()=> console.log("listening on port 3000"));
