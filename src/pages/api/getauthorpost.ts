import { Post, PrismaClient, User } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient()

export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    const {userid} = req.headers
    const { posts, userName }  = await prisma.user.findUnique({
      where: {
        id: `${userid}`
      },
      include: {
        posts: true, // All posts where authorId == 20
      },
      })
      res.status(200).json({userName, posts})
    }
