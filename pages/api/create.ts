import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] })
  const { name, email } = req.body
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })

    if (!user) {
      res.status(404)
      res.json({ error: 'User not found' })
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500)
    res.json({ error: 'Error' })
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
