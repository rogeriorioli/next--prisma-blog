import { PrismaClient, User} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient()



export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {

    const users : User[] = await prisma.user.findMany({})
      if (req.method === "GET") 
        return res.status(200).json(users);
  }