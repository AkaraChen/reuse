import { useParams } from "react-router-dom";

export const useRouterId = () => {
	const { id } = useParams();
	if (!id) {
		throw new Error(
			"useRouterId must be used with a route that has an id param",
		);
	}
	return id;
};
