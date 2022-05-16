// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { validatePresence } from "lib/api"
import prisma from "lib/prisma"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      const trips = await prisma.trip.findMany()

      await Promise.all(
        trips.map(async (trip) => {
          trip.expenses = await prisma.expense.findMany({
            where: { trip: trip.id }
          })
        })
      )
      res.status(200).json(trips)
      break
    }
    case "POST": {
      const { user, name, start_date, end_date } = req.body
      try {
        validatePresence(req.body, "user", "name")
      } catch (error) {
        return res.status(400).json({ message: error })
      }

      await prisma.trip.create({ data: { user, name, start_date, end_date } })

      res.status(200).end()
      break
    }
    default: {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
  }
}
