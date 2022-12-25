import { useEffect } from 'react';

interface Option {
    target: EventTarget
}

export const useEventListener = (
    eventName: string,
    handler: (...parameter: any[]) => void,
    option: Option
) => {
    useEffect(() => {
        const { target = window } = option;
        target.addEventListener(eventName, handler);
        return () => {
            target.removeEventListener(eventName, handler);
        };
    });
};
