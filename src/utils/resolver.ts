import { JitsiMeetExternalApi } from "./../types"

function resolveLibrary(domain: string) {
   return new Promise<JitsiMeetExternalApi>((resolve, reject) => {
      if (window.JitsiMeetExternalAPI) {
         resolve(window.JitsiMeetExternalAPI)
      }

      const externalApiScript: HTMLScriptElement =
         document.createElement("script")

      externalApiScript.async = true
      externalApiScript.src = `https://${domain}/external_api.js`
      externalApiScript.onload = () => resolve(window.JitsiMeetExternalAPI)
      externalApiScript.onerror = () =>
         reject(new Error(`Script load error: ${externalApiScript.src}`))

      document.head.appendChild(externalApiScript as Node)
   })
}

let scriptPromise: Promise<JitsiMeetExternalApi>

export function resolveScript(domain: string) {
   if (scriptPromise) {
      return scriptPromise
   }

   scriptPromise = resolveLibrary(domain)
   return scriptPromise
}