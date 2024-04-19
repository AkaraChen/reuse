import { useReducer } from "react";

export const useForceRender = () => {
	return useReducer((x) => x + 1, 0)[1];
};
