// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }
  const trips = await prisma.trip.findMany()
  res.status(200).json(trips)
}
