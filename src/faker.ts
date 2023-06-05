import { faker, type Faker } from "@faker-js/faker";

type FakerCb<T> = (faker: Faker) => T;

export const useFaker = <T>(seed: number, fn: FakerCb<T>) => {
	faker.seed(seed);
	return fn(faker);
};

export const useAsyncFaker = <T>(seed: number, fn: FakerCb<T>) => {
	return async () => {
		faker.seed(seed);
		return fn(faker)
	};
};

export const useRandomNumber = (seed: number, min: number, max: number) => {
	faker.seed(seed);
	return faker.number.int({ min, max });
}

export const useRandomPick = <T>(seed: number, arr: T[]) => {
	const random = useFaker(seed, faker => faker.helpers.arrayElement(arr))
	return random
}
