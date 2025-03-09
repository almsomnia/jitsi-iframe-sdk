import { defineConfig } from "tsup"

export default defineConfig({
   entry: ["src/index.ts"],
   format: ["cjs", "esm"],
   dts: true,
   external: ["node:events"],
   clean: true,
   minify: true,
   esbuildOptions(options) {
      options.external ||= []
      options.external.push("node:events")
   }
})