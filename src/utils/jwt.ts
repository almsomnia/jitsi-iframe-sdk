import * as jose from "jose"

export function jwt() {
   function encodeSecret(secret: string) {
      const key = new TextEncoder().encode(secret)
      return key
   }

   async function generate<T extends jose.JWTPayload>(
      body: T,
      secret: string,
      headers?: jose.JWTHeaderParameters
   ) {
      const key = encodeSecret(secret)
      const _headers = headers ?? { alg: "HS256", typ: "JWT" }
      const result = await new jose.SignJWT(body)
         .setProtectedHeader(_headers)
         .sign(key)

      return result
   }

   async function verify(
      token: string,
      secret: string,
      opts?: jose.JWTVerifyOptions
   ) {
      const key = encodeSecret(secret)
      const result = await jose.jwtVerify(token, key, opts)
      return result
   }

   return {
      generate,
      verify
   }
}
