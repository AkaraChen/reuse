import { renderHook } from "@testing-library/react";

import { describe, test } from "vitest";
import { useVisualViewport } from "./store";

describe("useVisualViewport", () => {
	test("should return the correct viewport", () => {
		renderHook(() => useVisualViewport());
	});
});
