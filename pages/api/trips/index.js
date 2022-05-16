// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      const trips = await prisma.trip.findMany()
      res.status(200).json(trips)
      break
    }
    case "POST": {
      const { user, name, start_date, end_date } = req.body
      if (!user) {
        return res.status(400).json({ message: "`user` is required" })
      }
      if (!name) {
        return res.status(400).json({ message: "`name` is required" })
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
