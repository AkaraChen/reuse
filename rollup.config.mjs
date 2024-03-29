import { defineConfig } from "rollup";
import ts from "rollup-plugin-ts";

export default defineConfig({
	input: "./src/index.ts",
	output: {
		dir: "dist",
	},
	plugins: [ts()],
});
