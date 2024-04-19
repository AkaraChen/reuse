import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"./src/router/index.ts",
		"./src/next/index.ts",
		"./src/client/index.ts",
		"./src/server/index.ts",
	],
	dts: true,
	format: "esm",
	splitting: false,
	external: ["react"],
});
