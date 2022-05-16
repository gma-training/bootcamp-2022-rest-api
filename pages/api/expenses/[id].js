import prisma from "lib/prisma"

export default async function handler(req, res) {
  const { query: { id }, method } = req
  switch (method) {
    case "GET": {
      const expense = await prisma.expense.findUnique({
        where: { id: parseInt(id) }
      })
      if (expense) {
        res.status(200).json({ ...expense })
      } else {
        res.status(404).json({ message: "Not Found" })
      }
      break
    }
    default: {
      res.status(405).json({ message: "Method Not Allowed" })
    }
  }
}
