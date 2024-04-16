import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./src/index.ts", "./src/router/index.ts", "./src/next/index.ts"],
	dts: true,
	format: "esm",
	splitting: false,
	external: ["react"],
});
