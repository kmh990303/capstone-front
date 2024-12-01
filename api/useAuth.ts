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

    const login = async (email: string, password: string) => {
        console.log(email, password);
        const response = await fetch('http://13.125.95.219:8080/api/member/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        console.log(response);
        if (!response.ok) {
            throw new Error('Login Failed');
        }
        // console.log(response);
        const data = await response.json();
        console.log(data, 'auth에서 잘 불러왔음!');
        return data;
    }

    const logout = async () => {
        return authFetch('http://backend-api/logout', { method: 'POST' });
    }

    return { login, logout };
}