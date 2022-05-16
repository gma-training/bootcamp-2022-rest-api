import prisma from "lib/prisma"
import { validatePresence } from "lib/api"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      try {
        validatePresence(req.body, 'trip', 'name', 'amount', 'currency')
      } catch (error) {
        return res.status(400).json({ message: error })
      }
      const { trip, name, date, amount, currency } = req.body
      await prisma.expense.create({ data: { trip, name, date, amount, currency } })
      res.status(200).end()
      break
    }
    default: {
      res.status(405).json({ message: "Method Not Allowed" })
    }
  }

}
