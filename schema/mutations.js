import { PrismaClient, Prisma } from '@prisma/client'
import jwt from 'jsonwebtoken'

Mutation: {
    signUp: async (parent, { name, email, password }, { prisma }) => {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: await bcrypt.hash(password, 10)
        }
      })
  
      return jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET)
    }
  }