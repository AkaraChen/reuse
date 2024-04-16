import { useContext, createContext } from "react";

export const createCtx = <T>(name: string, initValue?: T) => {
	const context = createContext<T>(initValue as any);
	const useContextValue = () => {
		const ctx = useContext(context);
		if (!ctx) {
			throw new Error(`No ${name} context found.`);
		}
		return ctx;
	};
	return {
		context,
		useContextValue,
		provider: context.Provider,
	};
};
