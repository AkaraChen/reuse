import { useEffect, useLayoutEffect } from 'react';
import { isBroswer } from '../util/isBrowser';

export const useMounted = (callback: () => any) => {
    useEffect(callback, []);
};

export const useUnMounted = (callback: () => any) => {
    useEffect(() => {
        return callback;
    }, []);
};

export const useIsomorphicLayoutEffect = isBroswer ? useLayoutEffect : useEffect;
