import { renderHook } from "@testing-library/react-hooks";
import { describe, test } from "vitest";
import { useVisualViewport } from "./store";

describe("useVisualViewport", () => {
	test("should return the correct viewport", () => {
		renderHook(() => useVisualViewport());
	});
});
