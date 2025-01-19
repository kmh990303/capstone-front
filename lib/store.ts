import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    setAccessToken: (token: string | null) => void;
    setRefreshToken: (token: string | null) => void;
    loginSuccess: boolean;
    setLoginSuccess: () => void;
    logout: () => void;

    refreshAccessToken: () => Promise<void>;
    checkAccessTokenExpiration: () => void;
}

interface AreaState {
    name: string | null;
    compareName: string | null;
    globalAreaIdx: number;
    globalCompareAreaIdx: number;
    setName: (name: string | null) => void;
    setCompareName: (name: string | null) => void;
    prevDate: Date | null;
    curDate: Date | null;
    setPrevDate: (date: Date | null) => void;
    setCurDate: (date: Date | null) => void;
    setGlobalAreaIdx: (idx: number) => void;
    setGlobalCompareAreaIdx: (idx: number) => void;
}

interface customFeatureState {
    featureUuid: string;
    setFeatureUuid: (uuid: string) => void;
}

const decodeJwt = (token: string) => {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            refreshToken: null,
            loginSuccess: false,
            setLoginSuccess: () => set((state) => ({ loginSuccess: !state.loginSuccess })),
            setAccessToken: (token) => set({ accessToken: token }),
            setRefreshToken: (token) => set({ refreshToken: token }),
            logout: () => set({ accessToken: null, refreshToken: null }),

            refreshAccessToken: async () => {
                const { accessToken, refreshToken, setAccessToken, setLoginSuccess } = get();

                if (refreshToken) {
                    try {
                        const response = await fetch('https://localens.duckdns.org/api/member/reissue', {
                            method: 'POST',
                            body: JSON.stringify({
                                accessToken,
                                refreshToken,
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                        if (response.ok) {
                            const data = await response.json();
                            setAccessToken(data.accessToken)
                        } else {
                            setLoginSuccess(); // 로그인 실패 시 상태 변경
                            throw new Error('Refresh Token is invalid');
                        }
                    } catch (error) {
                        console.error('Error refreshing access token:', error);
                        setLoginSuccess(); // 로그인 실패 시 상태 변경
                    }
                }
            },
            checkAccessTokenExpiration: async () => {
                const { accessToken, refreshAccessToken } = get();
                if (accessToken) {
                    const decodedToken = decodeJwt(accessToken);
                    const currentTime = Math.floor(Date.now() / 1000);
                    const expirationTime = decodedToken.exp;

                    if (expirationTime - currentTime <= 600) {
                        refreshAccessToken(); // 액세스 토큰 갱신
                    }
                }
            }
        }),
        {
            name: 'auth-storage',
        }
    )
)

export const useAreaStore = create<AreaState>()(
    persist(
        (set) => ({
            name: null,
            compareName: null,
            prevDate: null,
            curDate: null,
            globalAreaIdx: 0,
            globalCompareAreaIdx: 0,
            setName: (name) => set({ name }),
            setCompareName: (name) => set({ compareName: name }),
            setPrevDate: (date) => set({ prevDate: date }),
            setCurDate: (date) => set({ curDate: date }),
            setGlobalAreaIdx: (idx) => set({ globalAreaIdx: idx }),
            setGlobalCompareAreaIdx: (idx) => set({ globalCompareAreaIdx: idx }),
        }),
        {
            name: 'area-storage',
        }
    )
);

export const useCustomFeatureStore = create<customFeatureState>()(
    persist(
        (set) => ({
            featureUuid: '',
            setFeatureUuid: (uuid) => set({ featureUuid: uuid })
        }),
        {
            name: 'custom-storage',
        }
    )
);