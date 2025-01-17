'use client';

import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";

// interface LoginResponse {
//     code: number;
//     isSuccess: boolean;
//     message: string;
//     data: {
//         grantType: string;
//         accessToken: string;
//         refreshToken: string;
//     }
// }

export const useAuth = () => {
    const login = async (email: string, password: string) => {
        console.log(email, password);
        const response = await fetch('http://3.228.160.217:8080/api/member/login', {
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

    // const logout = async () => {
    //     return authFetch('http://backend-api/logout', { method: 'POST' });
    // }

    return { login };
}