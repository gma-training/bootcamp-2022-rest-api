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
      return res.status(200).json(trip)
    }
  }
}
