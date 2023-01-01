import {PrismaClient} from "@prisma/client"

export class DatabaseHandler {
    private prisma: PrismaClient;
    private static dataBaseHandler: DatabaseHandler;

    private constructor(){
        this.prisma = new PrismaClient();
    }
    static getInstance(){
      if (this.dataBaseHandler == null){
          this.dataBaseHandler = new DatabaseHandler();
      }
      return this.dataBaseHandler;
    }
    

    async createUser(data: any){
      await this.prisma.users.create({
        data:{
          name: data.name,
          email: data.email,
          password: data.password,
          roleId: 1
        }
      })
    }
   async getUsers(condition: any){
    const users = await this.prisma.users.findMany({where: condition});

    return users;
   }

   async createAnimal(data : any){
    await this.prisma.animal.create({
      data: {
        name: data.name,
        age: data.age,
        location: data.location,
        picture: data.picture
      }
    })
   }

   async getAllanimals(){
    const animals = await this.prisma.animal.findMany();
    return animals;
   }

}