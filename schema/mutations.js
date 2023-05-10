import { Prisma } from '@prisma/client'
import jsonwebtoken from 'jsonwebtoken'

Mutation: {
    signUp: async (parent, { name, email, password }, { Prisma }) => {
      const user = await Prisma.user.create({
        data: {
          name,
          email,
          password: await bcrypt.hash(password, 10)
        }
      })
  
      return jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET)
    }
  }