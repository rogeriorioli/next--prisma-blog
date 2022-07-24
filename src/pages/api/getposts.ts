import { Post, PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient()

export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {

    const posts : Post[] = await prisma.post.findMany()
        return res.status(200).json(posts);
  }


