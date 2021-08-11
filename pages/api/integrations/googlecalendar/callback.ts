import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/client"
import { PrismaClient } from "@prisma/client"
import { symmetricEncrypt } from "../../../../lib/crypto"
const prisma = new PrismaClient()
const { google } = require("googleapis")

const credentials = process.env.GOOGLE_API_CREDENTIALS

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query

  // Check that user is authenticated
  const session = await getSession({ req: req })

  if (!session) {
    res.status(401).json({ message: "You must be logged in to do this" })
    return
  }

  const { client_secret, client_id, redirect_uris } = JSON.parse(credentials).web
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

  // Convert to token
  return new Promise((resolve, reject) =>
    oAuth2Client.getToken(code, async (err, token) => {
      if (err) return console.error("Error retrieving access token", err)

      const encrypted = symmetricEncrypt(JSON.stringify(token), process.env.ENCRYPTION_KEY)
      await prisma.calendarConnection.create({
        data: {
          provider: "google_calendar",
          value: encrypted,
          accountId: session.user.id,
        },
      })

      res.redirect("/")
      resolve()
    })
  )
}
