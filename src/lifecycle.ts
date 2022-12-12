import {useEffect} from 'react';

export const useMounted = (callback: () => void) => {
    useEffect(callback, []);
};

export const useUnMounted = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};
