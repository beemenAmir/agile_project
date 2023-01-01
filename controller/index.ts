import express, {Express, Request, Response} from "express"
import {DatabaseHandler} from './DatabaseHandler';



const app: Express = express();
app.use(express.static('../view'));
app.use(express.json())
const dataBaseHandler = DatabaseHandler.getInstance();



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
