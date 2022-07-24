import { PrismaClient, User } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient()



export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
    const { userName , password, avatar }: User = req.body;
    const userExist: User = await prisma.user.findFirst({
      where: {
        userName
      }
    })
    if(!userExist) 
      if (req.method === "POST") {
        const newUser = await prisma.user.create({ data: { userName, password, avatar } });
        return res.status(200).json(newUser);
      }
    return res.status(409).json({   
      message: "user exist",  
      sugestions : userName+Math.floor(Math.random() * 100)
    })
  }