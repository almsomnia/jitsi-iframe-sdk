import { resolveScript } from "./utils/resolver"
import { JitsiMeetExternalApi, IJitsiMeetExternalApi, NthParam } from "./types"

async function init(domain: string, opts: NthParam<JitsiMeetExternalApi, 1>) {
   return await resolveScript(domain).then(
      (JitsiMeetExternalApi: JitsiMeetExternalApi) => {
         return new JitsiMeetExternalApi(domain, opts)
      }
   )
}

export { init, resolveScript }
export type { JitsiMeetExternalApi, IJitsiMeetExternalApi }
