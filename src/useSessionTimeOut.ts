// src/useSessionTimeout.ts
import { useIdleTimer } from 'react-idle-timer';
import { useEffect } from 'react';
import { getUserStore } from './UserStore';

interface SessionTimeoutProps {
    apiUrl: string;
    timeout: number; 
    onIdle: () => void;
}

export function useSessionTimeout({ apiUrl, timeout, onIdle }: SessionTimeoutProps) {
    const useUserStore = getUserStore(apiUrl);
    const isLoggedIn = useUserStore(state => state.isLoggedIn);

    const handleOnIdle = () => {
        if (isLoggedIn) {
            onIdle();
        }
    };

    const { start, reset } = useIdleTimer({
        timeout,
        onIdle: handleOnIdle,
        debounce: 500,
    });

    useEffect(() => {
        if (isLoggedIn) {
            start();
        } else {
            reset();
        }
    }, [isLoggedIn, start, reset]);

    return null;
}
