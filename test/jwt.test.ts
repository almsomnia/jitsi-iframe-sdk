import { JWT } from "../src"
import "dotenv/config"

describe("jwt", () => {
   test("generate", async () => {
      const { token, expectedToken } = await getToken()
      expect(token).toEqual(expectedToken)
   })

   test("verify", async () => {
      const { token, expectedToken, secret } = await getToken()
      const { verify } = JWT()
      const verifiedToken = await verify(token, secret)
      const verifiedExpectedToken = await verify(expectedToken, secret)

      expect(verifiedToken).toEqual(verifiedExpectedToken)
   })
})

async function getToken() {
   const { generate } = JWT()
   const payload = {
      context: {
         user: {
            avatar: "https://robohash.org/john-doe",
            name: "John Doe",
            email: "jdoe@example.com",
         },
      },
      moderator: true,
      aud: "jitsi",
      iss: process.env.JITSI_APP_ID as string,
      sub: process.env.JITSI_DOMAIN,
      room: "*",
      exp: 1753498815,
   }

   const secret = process.env.JITSI_APP_SECRET as string
   const token = await generate(payload, secret, {
      alg: "HS256",
      typ: "JWT",
   })
   const expectedToken = process.env.TOKEN_MATCHER as string
   return { token, expectedToken, secret }
}