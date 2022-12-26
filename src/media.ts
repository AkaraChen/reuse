import {useEffect, useState} from 'react';
import {isSevrer} from '../util/isBrowser';

export const useMedia = (media: string, default_: boolean = false) => {
    if (isSevrer) return default_;
    const mediaQuery = window.matchMedia(media);
    const [value, setValue] = useState(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) =>
        setValue(event.matches);
    useEffect(() => {
        mediaQuery.addEventListener('change', handler);
        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    });
    return value;
};

export const useIsMobile = (default_?: boolean) => useMedia('(max-width: 768px)', default_);

export const useIsDark = (default_?: boolean) => useMedia('(prefers-color-scheme: dark)', default_);
