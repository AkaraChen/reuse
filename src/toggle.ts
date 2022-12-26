import { useState } from 'react';

export const useToggle = <T, U>(defaultValue: T, reverseValue: U) => {
    const [state, setState] = useState<T | U>(defaultValue);
    const toggle = setState(
        current => current === defaultValue
            ? reverseValue
            : defaultValue
    );
    const set = (value: T | U) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValue);
    const actions = {
        toggle,
        set,
        setLeft,
        setRight
    };
    return [state, actions];
};

export const useBoolean = (defaultValue: boolean) => useToggle(defaultValue, !defaultValue)