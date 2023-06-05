import { useFaker, useAsyncFaker } from "./faker";
import { renderHook } from "@testing-library/react-hooks";
import { describe, test, expect } from 'vitest'

describe('faker', () => {
    test('should get same result', () => {
        const seed = 123
        const hook1 = renderHook(() => useFaker(seed, faker => faker.person.bio()))
        const hook2 = renderHook(() => useFaker(seed, faker => faker.person.bio()))
        expect(hook1.result.current).toBe(hook2.result.current)
    })

    test('should get different result', () => {
        const seed = 123
        const hook1 = renderHook(() => useFaker(seed, faker => faker.person.bio()))
        const hook2 = renderHook(() => useFaker(seed + 1, faker => faker.person.bio()))
        expect(hook1.result.current).not.toBe(hook2.result.current)
    })

    test('should get same result async', async () => {
        const seed = 123
        const hook1 = renderHook(() => useAsyncFaker(seed, faker => faker.person.bio()))
        const hook2 = renderHook(() => useAsyncFaker(seed, faker => faker.person.bio()))
        expect(await hook1.result.current()).toBe(await hook2.result.current())
    })
})
