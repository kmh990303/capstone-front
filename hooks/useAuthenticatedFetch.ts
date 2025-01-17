'use client';

import { useAuthStore } from "@/lib/store";

export const useAuthenticatedFetch = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const logout = useAuthStore((state) => state.logout); // logout 액션 가져오기
    const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);
    // const checkAccessTokenExpiration = useAuthStore((state) => state.checkAccessTokenExpiration);

    const authFetch = async (url: string, options: RequestInit = {}) => {
        if (!accessToken) {
            throw new Error('No access token Available');
        }
        // checkAccessTokenExpiration();

        const headers = new Headers(options.headers);
        headers.set('Authorization', `Bearer ${accessToken}`);

        const response = await fetch(url, { ...options, headers });

        if (response.status === 401) {
            try {
                await refreshAccessToken();
                return authFetch(url, options);
            } catch (error) {
                logout(); // 직접 상태 호출 대신 함수로
                throw new Error('Token Expired!');
            }
        }

        return response;
    }

    return { authFetch };
};
