import {PrismaClient} from "@prisma/client"

import express, {Express, Request, Response} from "express"




const prisma = new PrismaClient();
const app: Express = express();
app.use(express.static('../view'));
app.use(express.json())


app.get('/',(req: Request, res: Response)=>{
  res.sendFile("index.html")
} )

app.listen(3000, ()=> console.log("listening on port 3000"))

app.post('/signUp', (req: Request, res: Response)=>{
  signUpDB(req.body);
})

app.post('/signIn', (req: Request, res: Response) =>{
  console.log(req.body)
})
// async function main() {
//   const allUsers = await prisma.users.findMany();
//   console.log( allUsers);
//   await prisma.$disconnect()

//   }
// main()

async function signUpDB(message: any){
  await prisma.users.create({
    data:{
      name: message.name,
      email: message.email,
      password: message.password,
      roleId: 1
    }
  })

}