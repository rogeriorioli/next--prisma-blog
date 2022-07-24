import { Categories, PrismaClient, User } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient()



export default async function createCategorie(req: NextApiRequest, res: NextApiResponse) {
    const { categorie }: Categories = req.body;
      if (req.method === "POST") {
        const newUser = await prisma.categories.create({ data: { categorie } });
        return res.status(200).json(newUser);
      }
  }