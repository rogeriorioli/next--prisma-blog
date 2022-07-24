import { Post, PrismaClient, User } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient()



export default async function createPost(req: NextApiRequest, res: NextApiResponse) {
    const  {userid}  = req.headers
    const {title, content, description, feature, featureImage, image, categorieId, tags, bgColor }: Post = req.body;
      if (req.method === "POST") {
        const newPost = await prisma.post.create({ data: { 
            title,
            content,
            feature,
            featureImage,
            description,
            tags,
            bgColor,
            categorieId : !categorieId && '62cac20a66039118125af6d1',
            image,
            slug : title.split(' ').join('-'),
            userId : `${userid}`
         } });
        return res.status(200).json(newPost);
      }
    }