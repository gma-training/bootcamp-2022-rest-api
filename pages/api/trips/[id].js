import prisma from "lib/prisma"

export default async function handler(req, res) {
  const { query: { id }, method } = req
  switch (method) {
    case "GET": {
      const trip = await prisma.trip.findUnique({
        where: { id: parseInt(id) }
      })
      if (!trip) {
        return res.status(404).json({ message: "Not Found" })
      }

      res.status(200).json(trip)
      break
    }

    case "PUT": {
      const { user, name, start_date, end_date } = req.body
      await prisma.trip.update({
        where: { id: parseInt(id) },
        data: { user, name, start_date, end_date }
      })

      res.status(200).end()
      break
    }

    case "DELETE": {
      await prisma.trip.delete({ where: { id: parseInt(id) } })

      res.status(200).end()
      break
    }
  }
}
