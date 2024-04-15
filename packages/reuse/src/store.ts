import { useSyncExternalStore } from "react";

export const useVisualViewport = () => {
	return useSyncExternalStore(
		(onStoreChange) => {
			visualViewport?.addEventListener("resize", onStoreChange);
			visualViewport?.addEventListener("scroll", onStoreChange);
			return () => {
				visualViewport?.addEventListener("resize", onStoreChange);
				visualViewport?.addEventListener("scroll", onStoreChange);
			};
		},
		() => visualViewport,
	);
};
