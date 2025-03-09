import { JitsiMeetExternalApi } from './JitsiMeetExternalApi'

declare global {
   interface Window {
      JitsiMeetExternalAPI: JitsiMeetExternalApi
   }
}

export { JitsiMeetExternalApi }
export { default as IJitsiMeetExternalApi } from './IJitsiMeetExternalApi'

type ConstructorParams<T> = T extends new (...args: infer P) => any ? P : never
export type NthParam<T, N extends number> = ConstructorParams<T>[N]