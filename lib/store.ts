import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    logout: () => void;
}

interface AreaState {
    name: string | null;
    setName: (name: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (token) => set({ accessToken: token }),
            logout: () => set({ accessToken: null }),
        }),
        {
            name: 'auth-storage',
        }
    )
)

export const useAreaStore = create<AreaState>((set) => ({
    name: null,
    setName: (name) => set({name}),
}))