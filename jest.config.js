import { createDefaultEsmPreset } from 'ts-jest'

const preset = createDefaultEsmPreset()

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
   ...preset,
   testEnvironment: "node",
   extensionsToTreatAsEsm: ['.ts'],
}