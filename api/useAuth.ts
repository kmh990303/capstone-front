'use client';

import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";

interface LoginResponse {
    code: number;
    isSuccess: boolean;
    message: string;
    data: {
        grantType: string;
        accessToken: string;
        refreshToken: string;
    }
}

export const useAuth = () => {
    const authFetch = useAuthenticatedFetch();

    const login = async (email: string, password: string): Promise<LoginResponse> => {
        const response = await fetch('http://backend-api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            throw new Error('Login Failed');
        }

        const data = await response.json();
        return data;
    }

    const logout = async () => {
        return authFetch('http://backend-api/logout', { method: 'POST' });
    }

    return { login, logout };
}