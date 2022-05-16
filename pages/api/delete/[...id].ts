import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] })
  const id = req.query.id

  try {
    if (req.method === 'DELETE') {
      const user = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      })
      if (!user) {
        res.status(404)
        res.json({ error: 'User not found' })
      }
      
      res.status(200).json({ user })
    }

    
  } catch (error) {
    res.status(500)
    res.json({ error: 'Error' })
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
